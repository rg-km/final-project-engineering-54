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
	Role      string    `json:"role"`
	Phone     string    `json:"phone"`
	Address   string    `json:"address"`
	Status    string    `json:"status"`
	Photo     string    `json:"photo"`
	Logedin   bool      `json:"logedin"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type LoginSuccess struct {
	Email string `json:"email"`
	Token string `json:"token"`
}

type LoginError struct {
	Error string `json:"error"`
}

// jwt key for generate token
var jwtKey = []byte("secret")

// create struct claim for object encode in jwt
type Claims struct {
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
		json.NewEncoder(w).Encode(LoginError{Error: "Invalid email or password"})
		return
	}

	userRole, _ := api.usersSource.FetchUserRole(*res)

	// set expire time for token jwt in 1 hour
	expireTime := time.Now().Add(time.Hour * 1)

	// create claim for object encode in jwt
	claims := &Claims{
		Email: *res,
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
	json.NewEncoder(w).Encode(LoginSuccess{Email: *res, Token: tokenString})
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

	res, err := api.usersSource.Register(user.Email, user.Password, user.Name, user.Role, user.Phone, user.Address, user.Status, user.Photo, user.Logedin, user.CreatedAt, user.UpdatedAt)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(LoginError{Error: "Failed to register"})
		return
	}

	json.NewEncoder(w).Encode(res)
}

// create function for logout user
func (api *API) logout(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

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
	w.Write([]byte("Logout success"))
}
