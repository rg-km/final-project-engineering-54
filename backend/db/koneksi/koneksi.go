package koneksi

import (
	"database/sql"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// create func main for openning the database and starting the server
func GetConnection() *sql.DB {
	db, err := sql.Open("sqlite3", "backend/db/codeswer.db")
	if err != nil {
		panic(err)
	}

	db.SetMaxOpenConns(100)
	db.SetMaxIdleConns(10)
	db.SetConnMaxIdleTime(5 * time.Minute)
	db.SetConnMaxLifetime(1 * time.Hour)

	return db
}
