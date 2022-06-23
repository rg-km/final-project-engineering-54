package api

import (
	"fmt"
	"net/http"

	"github.com/rs/cors"

	"github.com/rg-km/final-project-engineering-54/backend/source"
)

// create struct API for manage api
type API struct {
	usersSource       source.UsersSource
	courseSource      source.CourseSource
	usersMentorSource source.UserMentorSource
	mux               *http.ServeMux
}

// create function for create new api
func NewAPI(usersSource source.UsersSource, courseSource source.CourseSource, userMentor source.UserMentorSource) API {
	mux := http.NewServeMux()
	api := API{
		usersSource, courseSource, userMentor, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/course", api.GET(http.HandlerFunc(api.getCourse)))
	mux.Handle("/api/course/id", api.GET(http.HandlerFunc(api.getCourseByID)))
	mux.Handle("/api/course/name", api.GET(http.HandlerFunc(api.getCourseByName)))

	// API with AuthMiddleware
	mux.Handle("/api/user", api.GET(api.AuthMiddleware(http.HandlerFunc(api.getUsers))))
	mux.Handle("/api/user/id", api.GET(api.AuthMiddleware(http.HandlerFunc(api.getUsersByID))))
	mux.Handle("/api/user/logged", api.GET(api.AuthMiddleware(http.HandlerFunc(api.getUsersLogedin))))
	mux.Handle("/api/user/update", api.PUT(api.AuthMiddleware(http.HandlerFunc(api.updateUsers))))
	mux.Handle("/api/mentor", api.GET(api.AuthMiddleware(http.HandlerFunc(api.getMentor))))

	// API with AuthMiddleware and AdminMiddleware
	mux.Handle("/api/user/delete", api.DELETE(api.AuthMiddleware(api.AdminMiddleware(http.HandlerFunc(api.deleteUsers)))))
	mux.Handle("/api/course/create", api.POST(api.AuthMiddleware(api.AdminMiddleware(http.HandlerFunc(api.addCourse)))))
	mux.Handle("/api/course/update", api.PUT(api.AuthMiddleware(api.AdminMiddleware(http.HandlerFunc(api.updateCourse)))))
	mux.Handle("/api/course/delete", api.DELETE(api.AuthMiddleware(api.AdminMiddleware(http.HandlerFunc(api.deleteCourse)))))

	return api
}

// create function for handle request
func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("Server started on port 8080")
	fmt.Println("http://localhost:8080")
	corsMiddleware := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
		Debug:            true,
	})

	handler := corsMiddleware.Handler(api.Handler())
	http.ListenAndServe(":8080", handler)
}
