package source

import (
	"database/sql"
	"errors"
	"time"

	"golang.org/x/crypto/bcrypt"
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
	err := row.Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Phone, &user.Address, &user.Photo, &user.Role, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
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
		err := rows.Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Phone, &user.Address, &user.Photo, &user.Role, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
		if err != nil {
			return users, err
		}
		users = append(users, user)
	}

	return users, nil
}

// create function for get user who logedin	true
func (u *UsersSource) FetchUserLogedin() ([]User, error) {
	var users []User

	rows, err := u.db.Query("SELECT * FROM users WHERE logedin = ?", true)
	if err != nil {
		return users, err
	}

	for rows.Next() {
		var user User
		err := rows.Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Phone, &user.Address, &user.Photo, &user.Role, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
		if err != nil {
			return users, err
		}
		users = append(users, user)
	}

	return users, nil
}

// create function for login user by email and password, then update logedin status to true
func (u *UsersSource) Login(email, password string) (User, error) {
	var sqlStatement string
	var user User

	sqlStatement = "SELECT id, email, password, name, role FROM users WHERE email = ?"

	row := u.db.QueryRow(sqlStatement, email, password)
	err := row.Scan(
		&user.ID,
		&user.Email,
		&user.Password,
		&user.Name,
		&user.Role,
	)
	if err != nil {
		return user, errors.New("Email or password is incorrect")
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return user, errors.New("Email or password is incorrect")
	}

	sqlStatement = "UPDATE users SET logedin = ? WHERE email = ?"

	_, err = u.db.Exec(sqlStatement, true, email)
	if err != nil {
		return user, err
	}

	return user, nil
}

// create function for register user if email already exist in database then return error
func (u *UsersSource) Register(email string, password string, name string, phone string, address string, photo string, role string, logedin bool, createdAt time.Time, updatedAt time.Time) (User, error) {
	var user User
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return user, err
	}

	if email == "" || password == "" || name == "" || phone == "" || address == "" {
		return user, errors.New("Please fill all field")
	}

	err = u.db.QueryRow("SELECT email FROM users WHERE email = ?", email).Scan(&user.Email)
	if err == nil {
		return user, errors.New("Email already exist")
	}

	_, err = u.db.Exec("INSERT INTO users (email, password, name, phone, address, photo, role, logedin, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", email, hashedPassword, name, phone, address, "default.svg", "user", false, createdAt, updatedAt)
	if err != nil {
		return user, errors.New("Failed to register")
	}

	return User{Email: email, Password: string(hashedPassword), Name: name, Phone: phone, Address: address, Photo: "default.svg", Role: "user", Logedin: logedin, CreatedAt: createdAt, UpdatedAt: updatedAt}, nil
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

// create function for update user by id
func (u *UsersSource) UpdateUser(id int64, password string, name string, phone string, address string, photo string, updatedAt time.Time) (User, error) {
	var user User
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	err = u.db.QueryRow("SELECT * FROM users WHERE id = ?", id).Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Phone, &user.Address, &user.Photo, &user.Role, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return user, err
	}

	if password != "" {
		user.Password = password
	}
	if name != "" {
		user.Name = name
	}
	if phone != "" {
		user.Phone = phone
	}
	if address != "" {
		user.Address = address
	}
	if photo != "" {
		user.Photo = photo
	}

	user.UpdatedAt = updatedAt

	_, err = u.db.Exec("UPDATE users SET password = ?, name = ?, phone = ?, address = ?, photo = ?, updated_at = ? WHERE id = ?", hashedPassword, user.Name, user.Phone, user.Address, user.Photo, user.UpdatedAt, id)
	if err != nil {
		return user, err
	}

	return user, nil
}

// create function for delete user by id
func (u *UsersSource) DeleteUser(id int64) (User, error) {
	var user User

	err := u.db.QueryRow("SELECT * FROM users WHERE id = ?", id).Scan(&user.ID, &user.Email, &user.Password, &user.Name, &user.Phone, &user.Address, &user.Photo, &user.Role, &user.Logedin, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return user, err
	}

	_, err = u.db.Exec("DELETE FROM users WHERE id = ?", id)
	if err != nil {
		return user, err
	}

	return user, nil
}

// create func count user who role user
func (u *UsersSource) CountUser() (int64, error) {
	var count int64

	err := u.db.QueryRow("SELECT COUNT(id) FROM users WHERE role = 'user'").Scan(&count)
	if err != nil {
		return count, err
	}

	return count, nil
}

// create func count user who role mentor
func (u *UsersSource) CountMentor() (int64, error) {
	var count int64

	err := u.db.QueryRow("SELECT COUNT(id) FROM users WHERE role = 'mentor'").Scan(&count)
	if err != nil {
		return count, err
	}

	return count, nil
}
