package main

import (
	"github.com/rg-km/final-project-engineering-54/backend/api"
	"github.com/rg-km/final-project-engineering-54/backend/db/koneksi"
	"github.com/rg-km/final-project-engineering-54/backend/db/migration"
	"github.com/rg-km/final-project-engineering-54/backend/source"

	_ "github.com/mattn/go-sqlite3"
)

// create func main for openning the database and starting the server
func main() {
	migration.Migrate()
	db := koneksi.GetConnection()

	users := source.NewUsersSource(db)
	courses := source.NewCoursesSource(db)
	usersMentor := source.NewUserMentorSource(db)
	forum := source.NewForumSource(db)

	mainApi := api.NewAPI(*users, *courses, *usersMentor, *forum)
	mainApi.Start()
}
