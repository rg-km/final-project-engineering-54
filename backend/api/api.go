package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-54/backend/source"
)

// create struct API for manage api
type API struct {
	usersSource source.UsersSource
	mux 	   *http.ServeMux
}

// create function for create new api
func NewAPI(usersSource source.UsersSource) API {
	mux := http.NewServeMux()
	api := API {
		usersSource, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	// mux.Handle("/api/user/forgot-password", api.POST(http.HandlerFunc(api.forgotPassword)))

	return api
}

// create function for handle request
func (api *API) Handler() *http.ServeMux {
	return api.mux
}


func (api *API) Start() {
	fmt.Println("Server started on port 8080")
	fmt.Println("http://localhost:8080")
	http.ListenAndServe(":8080", api.Handler())
}

