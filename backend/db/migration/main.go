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
				users_id INTEGER NOT NULL PRIMARY KEY,
				courses_id INTEGER NOT NULL,
				about VARCHAR(191),
				rating_sum DOUBLE,
				rating_count INTEGER,
				avg_rating DOUBLE,
				FOREIGN KEY (users_id) REFERENCES users(id),
				FOREIGN KEY (courses_id) REFERENCES courses(id)
			);

			CREATE TABLE IF NOT EXISTS forums (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				users_id INTEGER NOT NULL,
				users_mentor_id INTEGER NOT NULL,
				courses_id INTEGER NOT NULL,
				title VARCHAR(191) NOT NULL,
				question TEXT NOT NULL,
				question_photo VARCHAR(191),
				answer TEXT,
				answer_photo VARCHAR(191),
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL,
				FOREIGN KEY (users_id) REFERENCES users(id),
				FOREIGN KEY (users_mentor_id) REFERENCES users_mentor(users_id),
				FOREIGN KEY (courses_id) REFERENCES courses(id)
			);


			INSERT INTO users (email, password, name, phone, address, photo, role, logedin, created_at, updated_at) VALUES 
			("admin@gmail.com", "123456", "admin", "081234567890", "Jl. Raya", "default.png", "admin", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("user@gmail.com", "123456", "user", "081234567890", "Jl. Raya", "default.png", "user", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("mentor1@gmail.com", "123456", "mentor1", "081234567890", "Jl. Raya", "default.png", "mentor", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("mentor2@gmail.com", "123456", "mentor2", "081234567890", "Jl. Raya", "default.png", "mentor", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00");

			INSERT INTO courses (name, desc, created_at, updated_at) VALUES
			("Go", "Go is a compiled language developed at Google", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			("React", "React is a front-end library developed at Facebook", "2020-01-01 00:00:00", "2020-01-01 00:00:00");

			INSERT INTO users_mentor (users_id, courses_id, about, rating_sum, rating_count, avg_rating) VALUES
			(3, 1, "I am a mentor for Go", 50, 10, 5),
			(4, 2, "I am a mentor for React", 30, 10, 3);

			INSERT INTO forums (users_id, users_mentor_id, courses_id, title, question, question_photo, answer, answer_photo, created_at, updated_at) VALUES
			(1, 1, 1, "How to use Go?", "I want to learn how to use Go", "default.png", "I can use Go", "default.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			(1, 1, 2, "How to use React?", "I want to learn how to use React", "default.png", "I can use React", "default.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
			(2, 1, 1, "How to use Go? with gin", "I want to use Go with gin", "default.png", "I can use Go with gin", "default.png", "2020-01-01 00:00:00", "2020-01-01 00:00:00");

		`)

	if err != nil {
		panic(err)
	}
}
