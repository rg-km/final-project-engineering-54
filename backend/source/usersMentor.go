package source

import (
	"database/sql"
	"errors"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type UserMentorSource struct {
	db *sql.DB
}

func NewUserMentorSource(db *sql.DB) *UserMentorSource {
	return &UserMentorSource{db: db}
}

// create func fetch user mentor using join query
func (u *UserMentorSource) FetchUserMentor() ([]UserMentor, error) {
	var sqlStatement string
	var userMentors []UserMentor

	sqlStatement = `
	SELECT
		u.id,
		u.email,
		u.password,
		u.name,
		u.phone,
		u.address,
		u.photo,
		u.role,
		um.about,
		um.rating_sum,
		um.rating_count,
		c.id,
		c.name,
		c.desc
	FROM 
		users u
	JOIN
		users_mentor um ON u.id = um.users_id
	JOIN
		courses c ON um.courses_id = c.id
	`

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var userMentor UserMentor
		err = rows.Scan(
			&userMentor.UserID,
			&userMentor.Email,
			&userMentor.Password,
			&userMentor.Name,
			&userMentor.Phone,
			&userMentor.Address,
			&userMentor.Photo,
			&userMentor.Role,
			&userMentor.About,
			&userMentor.RatingSum,
			&userMentor.RatingCount,
			&userMentor.CourseID,
			&userMentor.CourseName,
			&userMentor.CourseDesc,
		)
		if err != nil {
			return nil, err
		}
		userMentors = append(userMentors, userMentor)
	}

	return userMentors, nil
}

// create func fetch user mentor by id using join query
func (u *UserMentorSource) FetchUserMentorByID(id int64) (UserMentor, error) {
	var sqlStatement string
	var userMentor UserMentor

	sqlStatement = `
	SELECT
		u.id,
		u.email,
		u.password,
		u.name,
		u.phone,
		u.address,
		u.photo,
		u.role,
		um.about,
		um.rating_sum,
		um.rating_count,
		c.id,
		c.name,
		c.desc
	FROM 
		users u
	JOIN
		users_mentor um ON u.id = um.users_id
	JOIN
		courses c ON um.courses_id = c.id
	WHERE
		u.id = ?
	`

	row := u.db.QueryRow(sqlStatement, id)
	err := row.Scan(
		&userMentor.UserID,
		&userMentor.Email,
		&userMentor.Password,
		&userMentor.Name,
		&userMentor.Phone,
		&userMentor.Address,
		&userMentor.Photo,
		&userMentor.Role,
		&userMentor.About,
		&userMentor.RatingSum,
		&userMentor.RatingCount,
		&userMentor.CourseID,
		&userMentor.CourseName,
		&userMentor.CourseDesc,
	)
	if err != nil {
		return userMentor, err
	}

	return userMentor, nil
}

// create func insert user mentor
func (u *UserMentorSource) InsertUserMentor(email string, password string, name string, phone string, address string, photo string, role string, logedin bool, createdAt time.Time, updatedAt time.Time, about string, ratingSum float64, ratingCount int64, courseID int64, courseName string, courseDesc string) (UserMentor, error) {
	var sqlStatement string
	var id int64
	var userMentor UserMentor

	sqlStatement = `
	SELECT email FROM users WHERE email = ?`
	row := u.db.QueryRow(sqlStatement, email)
	err := row.Scan(&userMentor.Email)
	if err == nil {
		return userMentor, errors.New("Email already exist")
	}

	sqlStatement = `
	INSERT INTO users (email, password, name, phone, address, photo, role, logedin, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`

	stmt, err := u.db.Prepare(sqlStatement)
	if err != nil {
		return userMentor, err
	}

	res, err := stmt.Exec(email, password, name, phone, address, "default.svg", "mentor", false, createdAt, updatedAt)
	if err != nil {
		return userMentor, err
	}

	id, err = res.LastInsertId()
	if err != nil {
		return userMentor, err
	}

	sqlStatement = `
	INSERT INTO users_mentor (users_id, courses_id, about, rating_sum, rating_count) VALUES (?, ?, ?, ?, ?)
	`

	stmt, err = u.db.Prepare(sqlStatement)
	if err != nil {
		return userMentor, err
	}

	res, err = stmt.Exec(id, courseID, about, ratingSum, ratingCount)
	if err != nil {
		return userMentor, err
	}

	return UserMentor{Email: email, Password: password, Name: name, Phone: phone, Address: address, Photo: "default.svg", Role: "mentor", Logedin: logedin, CreatedAt: createdAt, UpdatedAt: updatedAt, About: about, RatingSum: ratingSum, RatingCount: ratingCount, CourseID: courseID, CourseName: courseName, CourseDesc: courseDesc}, nil
}

// create func update user mentor by id
func (u *UserMentorSource) UpdateUserMentor(id int64, password string, name string, phone string, address string, photo string, updatedAt time.Time, about string) (UserMentor, error) {
	var sqlStatement string
	var userMentor UserMentor

	sqlStatement = `
	SELECT
		u.id,
		u.email,
		u.password,
		u.name,
		u.phone,
		u.address,
		u.photo,
		u.role,
		um.about,
		um.rating_sum,
		um.rating_count,
		c.id,
		c.name,
		c.desc
	FROM 
		users u
	JOIN
		users_mentor um ON u.id = um.users_id
	JOIN
		courses c ON um.courses_id = c.id
	WHERE
		u.id = ?
	`

	row := u.db.QueryRow(sqlStatement, id)
	err := row.Scan(
		&userMentor.UserID,
		&userMentor.Email,
		&userMentor.Password,
		&userMentor.Name,
		&userMentor.Phone,
		&userMentor.Address,
		&userMentor.Photo,
		&userMentor.Role,
		&userMentor.About,
		&userMentor.RatingSum,
		&userMentor.RatingCount,
		&userMentor.CourseID,
		&userMentor.CourseName,
		&userMentor.CourseDesc,
	)
	if err != nil {
		return userMentor, err
	}

	if password != "" {
		userMentor.Password = password
	}
	if name != "" {
		userMentor.Name = name
	}
	if phone != "" {
		userMentor.Phone = phone
	}
	if address != "" {
		userMentor.Address = address
	}
	if photo != "" {
		userMentor.Photo = photo
	}
	if about != "" {
		userMentor.About = about
	}
	userMentor.UpdatedAt = updatedAt

	sqlStatement = `
	UPDATE users SET password = ?, name = ?, phone = ?, address = ?, photo = ?, updated_at = ? WHERE id = ?
	`

	stmt, err := u.db.Prepare(sqlStatement)
	if err != nil {
		return userMentor, err
	}

	_, err = stmt.Exec(userMentor.Password, userMentor.Name, userMentor.Phone, userMentor.Address, userMentor.Photo, userMentor.UpdatedAt, id)
	if err != nil {
		return userMentor, err
	}

	sqlStatement = `
	UPDATE users_mentor SET about = ? WHERE users_id = ?
	`

	stmt, err = u.db.Prepare(sqlStatement)
	if err != nil {
		return userMentor, err
	}

	_, err = stmt.Exec(userMentor.About, id)
	if err != nil {
		return userMentor, err
	}

	return userMentor, nil
}
