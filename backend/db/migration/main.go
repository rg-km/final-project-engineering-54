// create migration database with sqlite3
package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/codeswer.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
			CREATE TABLE IF NOT EXISTS users (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				email VARCHAR(191) NOT NULL,
				password VARCHAR(40) NOT NULL,
				name VARCHAR(40) NOT NULL,
				phone VARCHAR(20) NOT NULL,
				address VARCHAR(191) NOT NULL,
				photo VARCHAR(191) NOT NULL,
				role VARCHAR(20) NOT NULL,
				logedin BOOLEAN NOT NULL,
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL
			);

			CREATE TABLE IF NOT EXISTS courses (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				name VARCHAR(191) NOT NULL,
				desc VARCHAR(191) NOT NULL,
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL
			);

			CREATE TABLE IF NOT EXISTS users_mentor (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				courses_id INTEGER NOT NULL,
				name VARCHAR(191) NOT NULL,
				about VARCHAR(191) NOT NULL,
				rate INTEGER NOT NULL,
				review TEXT NOT NULL,
				photo VARCHAR(191) NOT NULL,
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL,
				FOREIGN KEY (courses_id) REFERENCES courses(id)
			);

			CREATE TABLE IF NOT EXISTS forums (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				users_id INTEGER NOT NULL,
				users_mentor_id INTEGER NOT NULL,
				courses_id INTEGER NOT NULL,
				title VARCHAR(191) NOT NULL,
				content TEXT NOT NULL,
				content_photo VARCHAR(191) NOT NULL,
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL,
				FOREIGN KEY (users_id) REFERENCES users(id),
				FOREIGN KEY (users_mentor_id) REFERENCES users_mentor(id),
				FOREIGN KEY (courses_id) REFERENCES courses(id)
			);


			INSERT INTO users (email, password, name, phone, address, photo, role, logedin, created_at, updated_at) VALUES 
			("admin@gmail.com", "123456", "admin", "081234567890", "Jl. Raya", "default.png", "admin", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("user@gmail.com", "123456", "user", "081234567890", "Jl. Raya", "default.png", "user", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00");

			INSERT INTO courses (name, desc, created_at, updated_at) VALUES
			("Go", "Go is a compiled language developed by Google. It is used to develop web applications and is used by Google to develop the Chrome, Chromium, and Android web browsers.", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("React", "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.", "2020-01-01 00:00:00", "2020-01-01 00:00:00");

			INSERT INTO users_mentor (courses_id, name, about, rate, review, photo, created_at, updated_at) VALUES
			(1, "Mentor 1", "Mentor 1 is a mentor for Go", 5, "Good mentor", "default.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			(2, "Mentor 2", "Mentor 2 is a mentor for React", 5, "Good mentor", "default.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00");

			INSERT INTO forums (users_id, users_mentor_id, courses_id, title, content, content_photo, created_at, updated_at) VALUES
			(1, 1, 1, "Troble with Go", "I have trouble with Go when I create a new project", "content_photo.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			(2, 2, 2, "Troble with React", "I have trouble with React when I create a new project", "content_photo.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00");
		`)

	if err != nil {
		panic(err)
	}
}
