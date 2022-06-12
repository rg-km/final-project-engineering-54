// create migration database with sqlite3
package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

	func main() {
		db, err := sql.Open("sqlite3", "backend/db/migration/codeswer.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
			CREATE TABLE IF NOT EXISTS users (
				id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				email VARCHAR(191) NOT NULL,
				password VARCHAR(40) NOT NULL,
				name VARCHAR(40) NOT NULL,
				role VARCHAR(20) NOT NULL,
				phone VARCHAR(20) NOT NULL,
				address VARCHAR(191) NOT NULL,
				status VARCHAR(20) NOT NULL,
				photo VARCHAR(191) NOT NULL,
				logedin BOOLEAN NOT NULL,
				created_at DATETIME NOT NULL,
				updated_at DATETIME NOT NULL
			);

			INSERT INTO users (email, password, name, role, phone, address, status, photo, logedin, created_at, updated_at) VALUES
			('admin@gmail.com', '123456', 'admin', 'admin', '081234567890', 'Jl. Raya', 'active', 'default.png', 1, '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
			('user@gmail.com', '123456', 'user', 'user', '081234567890', 'Jl. Raya', 'active', 'default.png', 0, '2020-01-01 00:00:00', '2020-01-01 00:00:00');


		`)

		if err != nil {
			panic(err)
		}
	}

			