package source

import (
	"database/sql"
	"errors"
	"time"
)

type UsersSource struct {
	db *sql.DB
}

// create function for create new users source
func NewUsersSource(db *sql.DB) *UsersSource {
	return &UsersSource{db: db}
}

// create function for get user by id
func (u *UsersSource) FetchUserByID(id int64) (User, error) {
	var user User

	row := u.db.QueryRow("SELECT * FROM users WHERE id = ?", id)
	err := row.Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Role, &user.Phone, &user.Address, &user.Status, &user.Photo, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return user, err
	}

	return user, nil
}

// create function for get all user
func (u *UsersSource) FetchAllUsers() ([]User, error) {
	var users []User

	rows, err := u.db.Query("SELECT * FROM users")
	if err != nil {
		return users, err
	}

	for rows.Next() {
		var user User
		err := rows.Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Role, &user.Phone, &user.Address, &user.Status, &user.Photo, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
		if err != nil {
			return users, err
		}
		users = append(users, user)
	}

	return users, nil
}

// create function for login user by email and password, then update logedin status to true
func (u *UsersSource) Login(email string, password string) (*string, error) {
	var user User

	err := u.db.QueryRow("SELECT email FROM users WHERE email = ? AND password = ?", email, password).Scan(&user.Email)
	if err != nil {
		return nil, errors.New("Email or password is incorrect")
	}

	_, err = u.db.Exec("UPDATE users SET logedin = ? WHERE email = ?", true, email)
	if err != nil {
		return nil, err
	}

	return &user.Email, nil
}

// create function for register user
func (u *UsersSource) Register(email string, password string, name string, role string, phone string, address string, status string, photo string, logedin bool, createdAt time.Time, updatedAt time.Time) (User, error) {
	_, err := u.db.Exec("INSERT INTO users (email, password, name, role, phone, address, status, photo, logedin, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", email, password, name, role, phone, address, status, photo, logedin, createdAt, updatedAt)
	if err != nil {
		return User{}, err
	}

	return User{Email: email, Password: password, Name: name, Role: role, Phone: phone, Address: address, Status: status, Photo: photo, Logedin: logedin, CreatedAt: createdAt, UpdatedAt: updatedAt}, nil
}

// create function for fetch user role
func (u *UsersSource) FetchUserRole(email string) (*string, error) {
	var user User

	err := u.db.QueryRow("SELECT role FROM users WHERE email = ?", email).Scan(&user.Role)
	if err != nil {
		return nil, err
	}

	return &user.Role, nil
}

// create logout function for logout user, then update logedin status to false
func (u *UsersSource) Logout(email string) (*string, error) {
	_, err := u.db.Exec("UPDATE users SET logedin = ? WHERE email = ?", false, email)
	if err != nil {
		return nil, err
	}

	return &email, nil
}