package api

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"
)

type getUsers struct {
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

type getUsersSuccess struct {
	Users []getUsers `json:"users"`
}

type getUsersError struct {
	Error string `json:"error"`
}

// create function for get all users
func (api *API) getUsers(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getUsersSuccess{}
	response.Users = make([]getUsers, 0)

	users, err := api.usersSource.FetchAllUsers()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getUsersError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, getUsers{
			ID:    user.ID,
			Email: user.Email,
			// Password:  user.Password,
			Name:      user.Name,
			Phone:     user.Phone,
			Address:   user.Address,
			Photo:     user.Photo,
			Role:      user.Role,
			Logedin:   user.Logedin,
			CreatedAt: user.CreatedAt,
			UpdatedAt: user.UpdatedAt,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for get user by id
func (api *API) getUsersByID(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getUsersSuccess{}
	response.Users = make([]getUsers, 0)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	user, err := api.usersSource.FetchUserByID(int64(id))
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getUsersError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	response.Users = append(response.Users, getUsers{
		ID:    user.ID,
		Email: user.Email,
		// Password:  user.Password,
		Name:      user.Name,
		Phone:     user.Phone,
		Address:   user.Address,
		Photo:     user.Photo,
		Role:      user.Role,
		Logedin:   user.Logedin,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
	})

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for get user who logedin true
func (api *API) getUsersLogedin(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getUsersSuccess{}
	response.Users = make([]getUsers, 0)

	users, err := api.usersSource.FetchUserLogedin()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getUsersError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, getUsers{
			ID:    user.ID,
			Email: user.Email,
			// Password:  user.Password,
			Name:      user.Name,
			Phone:     user.Phone,
			Address:   user.Address,
			Photo:     user.Photo,
			Role:      user.Role,
			Logedin:   user.Logedin,
			CreatedAt: user.CreatedAt,
			UpdatedAt: user.UpdatedAt,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for update user
func (api *API) updateUsers(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user getUsers
	err := json.NewDecoder(r.Body).Decode(&user)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getUsersError{Error: "user not found"})
		return
	}

	res, err := api.usersSource.UpdateUser(int64(id), user.Password, user.Name, user.Phone, user.Address, user.Photo, time.Now())

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getUsersError{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(res)
	w.Write([]byte("Update user success"))
}

// create func for delete user
func (api *API) deleteUsers(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: "user not found"})
		return
	}

	res, err := api.usersSource.DeleteUser(int64(id))

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	encoder.Encode(res)
	w.Write([]byte("Delete user success"))
}

// create func for count user who role user
func (api *API) countUsers(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	count, err := api.usersSource.CountUser()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	encoder.Encode(count)
}

// create func for count user who role mentor
func (api *API) countMentor(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	count, err := api.usersSource.CountMentor()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getUsersError{Error: err.Error()})
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	encoder.Encode(count)
}
