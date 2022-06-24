package source

import (
	"database/sql"

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

// create func insert user mentor using join query
func (u *UserMentorSource) InsertUserMentor(userID int64, courseID int64, about string, ratingSum float64, ratingCount int64) (UserMentor, error) {
	var sqlStatement string
	var userMentor UserMentor

	sqlStatement = `
	INSERT INTO users_mentor (users_id, courses_id, about, rating_sum, rating_count) VALUES (?, ?, ?, ?, ?)
	`

	stmt, err := u.db.Prepare(sqlStatement)
	if err != nil {
		return userMentor, err
	}

	res, err := stmt.Exec(userID, courseID, about, ratingSum, ratingCount)
	if err != nil {
		return userMentor, err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return userMentor, err
	}

	userMentor.UserID = id
	userMentor.CourseID = courseID
	userMentor.About = about
	userMentor.RatingSum = ratingSum
	userMentor.RatingCount = ratingCount

	return userMentor, nil
}

// create func insert user mentor from user
