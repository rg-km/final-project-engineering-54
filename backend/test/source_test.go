package source_test

import (
	"database/sql"
	"time"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	_ "github.com/mattn/go-sqlite3"

	"github.com/rg-km/final-project-engineering-54/backend/source"
)

// create unit test for source/users.go
var _ = Describe("Source Test", func() {
	var (
		db         *sql.DB
		err        error
		userSource *source.UsersSource
	)

	BeforeEach(func() {
		db, err = sql.Open("sqlite3", "./codeswer_test.db")
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

		INSERT INTO users (email, password, name, phone, address, photo, role, logedin, created_at, updated_at) VALUES 
		("admin@gmail.com", "$2a$10$43G5XILdx/TnbNBjdpqkEOlO.V4KOZMrT2NSg8C0PvJyg7vZgAjPO", "admin", "081234567890", "Jl. Raya", "default.svg", "admin", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00"),
		("user@gmail.com", "$2a$10$43G5XILdx/TnbNBjdpqkEOlO.V4KOZMrT2NSg8C0PvJyg7vZgAjPO", "user", "081234567890", "Jl. Raya", "default.svg", "user", false, "2020-01-01 00:00:00", "2020-01-01 00:00:00");

		

			`)

		if err != nil {
			panic(err)
		}

		userSource = source.NewUsersSource(db)
	})

	AfterEach(func() {
		db, err = sql.Open("sqlite3", "./codeswer_test.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
			DROP TABLE IF EXISTS users;
			`)

		if err != nil {
			panic(err)
		}
	})

	Describe("Select All Users", func() {
		When("Get All Users List From Database", func() {
			It("Should Return All Users List", func() {
				usersList, err := userSource.FetchAllUsers()
				Expect(err).ToNot(HaveOccurred())

				Expect(usersList[0].Email).To(Equal("admin@gmail.com"))
				Expect(usersList[0].Password).To(Equal("$2a$10$43G5XILdx/TnbNBjdpqkEOlO.V4KOZMrT2NSg8C0PvJyg7vZgAjPO"))
				Expect(usersList[0].Name).To(Equal("admin"))
				Expect(usersList[0].Phone).To(Equal("081234567890"))
				Expect(usersList[0].Address).To(Equal("Jl. Raya"))
				Expect(usersList[0].Photo).To(Equal("default.svg"))
				Expect(usersList[0].Role).To(Equal("admin"))
				Expect(usersList[0].Logedin).To(Equal(false))
				Expect(usersList[1].Email).To(Equal("user@gmail.com"))
				Expect(usersList[1].Password).To(Equal("$2a$10$43G5XILdx/TnbNBjdpqkEOlO.V4KOZMrT2NSg8C0PvJyg7vZgAjPO"))
				Expect(usersList[1].Name).To(Equal("user"))
				Expect(usersList[1].Phone).To(Equal("081234567890"))
				Expect(usersList[1].Address).To(Equal("Jl. Raya"))
				Expect(usersList[1].Photo).To(Equal("default.svg"))
				Expect(usersList[1].Role).To(Equal("user"))
				Expect(usersList[1].Logedin).To(Equal(false))
			})
		})
	})

	Describe("Select User By ID", func() {
		When("Get User By ID From Database", func() {
			It("Should Return User By ID", func() {
				user, err := userSource.FetchUserByID(1)
				Expect(err).ToNot(HaveOccurred())

				Expect(user.Email).To(Equal("admin@gmail.com"))
				Expect(user.Password).To(Equal("$2a$10$43G5XILdx/TnbNBjdpqkEOlO.V4KOZMrT2NSg8C0PvJyg7vZgAjPO"))
				Expect(user.Name).To(Equal("admin"))
				Expect(user.Phone).To(Equal("081234567890"))
				Expect(user.Address).To(Equal("Jl. Raya"))
				Expect(user.Photo).To(Equal("default.svg"))
				Expect(user.Role).To(Equal("admin"))
				Expect(user.Logedin).To(Equal(false))
			})
		})
	})

	Describe("Login User", func() {
		When("Email and Password is Correct", func() {
			It("accepts the login", func() {
				res, err := userSource.Login("admin@gmail.com", "Codeswer54_")
				Expect(err).ToNot(HaveOccurred())
				Expect(res.ID).To(Equal(int64(1)))
				Expect(res.Email).To(Equal("admin@gmail.com"))
			})
		})
		When("Email is correct but Password is wrong", func() {
			It("rejects the login", func() {
				_, err := userSource.Login("admin@gmail.com", "1234")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Email or password is incorrect"))
			})
		})
		When("Email and Password is wrong", func() {
			It("rejects the login", func() {
				_, err := userSource.Login("damaraccdbgt@gmail.com", "1234")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Email or password is incorrect"))
			})
		})
	})

	// create for register user if email already exist in database then return error
	Describe("Register User", func() {
		start := time.Now()

		When("Email is not exist in Database", func() {
			It("accepts the register", func() {
				res, err := userSource.Register("damaraccd11@gmail.com", "123456", "damara", "081234567890", "Jl. Raya", "default.svg", "user", false, start, start)
				Expect(err).ToNot(HaveOccurred())

				Expect(res.Email).ToNot(Equal(""))
				Expect(res.Password).ToNot(Equal(""))
				Expect(res.Name).ToNot(Equal(""))
				Expect(res.Phone).ToNot(Equal(""))
				Expect(res.Address).ToNot(Equal(""))
				Expect(res.Photo).ToNot(Equal(""))
				Expect(res.Role).ToNot(Equal(""))
				Expect(res.Logedin).To(Equal(false))
				Expect(res.CreatedAt).ToNot(Equal(time.Now()))
				Expect(res.UpdatedAt).ToNot(Equal(time.Now()))
			})
		})
		When("Email is exist in Database", func() {
			It("rejects the register", func() {
				_, err := userSource.Register("admin@gmail.com", "123456", "damara", "081234567890", "Jl. Raya", "default.svg", "user", false, start, start)
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Email already exist"))
			})
		})
		When("All Field is Empty", func() {
			It("rejects the register", func() {
				_, err := userSource.Register("", "", "", "", "", "", "", false, start, start)
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Please fill all field"))
			})
		})
	})

})
