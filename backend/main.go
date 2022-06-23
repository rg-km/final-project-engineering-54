package main

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-54/backend/source"
	"github.com/rg-km/final-project-engineering-54/backend/api"

	_ "github.com/mattn/go-sqlite3"
)

// create func main for openning the database and starting the server
func main() {
	db, err := sql.Open("sqlite3", "backend/db/codeswer.db")
	if err != nil {
		panic(err)
	}

	users := source.NewUsersSource(db)
	courses := source.NewCoursesSource(db)
	usersMentor := source.NewUserMentorSource(db)

	mainApi := api.NewAPI(*users, *courses, *usersMentor)
	mainApi.Start()
}
