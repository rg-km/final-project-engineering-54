// create auth controller for user login and register and logout and forgot password
package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

// create struct for user
type User struct {
	ID        int64     `json:"id"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	Name      string    `json:"name"`
	Phone     string    `json:"phone"`
	Address   string    `json:"address"`
	Photo     string    `json:"photo"`
	Role      string    `json:"role"`
	Logedin   bool      `json:"logedin"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type LoginSuccess struct {
	Id    int64  `json:"id"`
	Email string `json:"email"`
	Name  string `json:"name"`
	Role  string `json:"role"`
	Token string `json:"token"`
}

type LoginError struct {
	Error string `json:"error"`
}

// jwt key for generate token
var jwtKey = []byte("secret")

// create struct claim for object encode in jwt
type Claims struct {
	Id    int64
	Email string
	Role  string
	jwt.StandardClaims
}

// create function for login user and return token
func (api *API) login(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginError{Error: "Invalid request"})
		return
	}

	res, err := api.usersSource.Login(user.Email, user.Password)

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginError{Error: err.Error()})
		return
	}

	userRole, _ := api.usersSource.FetchUserRole(res.Email)

	// set expire time for token jwt in 24 hour
	expireTime := time.Now().Add(time.Hour * 24)

	// create claim for object encode in jwt
	claims := &Claims{
		Id:    res.ID,
		Email: user.Email,
		Role:  *userRole,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expireTime.Unix(),
		},
	}

	// create token with claim and jwt key
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// encode token to string
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(LoginError{Error: "Failed to generate token"})
		return
	}

	// set token to cookie response
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expireTime,
		Path:    "/",
	})

	// return token to client
	json.NewEncoder(w).Encode(LoginSuccess{
		Id:    res.ID,
		Email: res.Email,
		Name:  res.Name,
		Role:  *userRole,
		Token: tokenString})
}

// create function for register user
func (api *API) register(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginError{Error: "Invalid request"})
		return
	}

	res, err := api.usersSource.Register(user.Email, user.Password, user.Name, user.Phone, user.Address, user.Photo, user.Role, user.Logedin, time.Now(), time.Now())

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginError{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(res)
}

// create function for logout user, then change logedin status to false
func (api *API) logout(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginError{Error: "Invalid request"})
		return
	}

	res, err := api.usersSource.Logout(user.Email)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(LoginError{Error: "Failed to logout"})
		return
	}

	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			json.NewEncoder(w).Encode(LoginError{Error: "Unauthorized"})
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginError{Error: "Invalid request"})
		return
	}
	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginError{Error: "Unauthorized"})
		return
	}

	c := http.Cookie{
		Name:    "token",
		Value:   "",
		Expires: time.Unix(0, 0),
		MaxAge:  -1,
		Path:    "/",
	}
	http.SetCookie(w, &c)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
	w.Write([]byte("Logout success"))
}
