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