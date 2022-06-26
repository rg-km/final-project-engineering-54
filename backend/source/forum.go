package source

import (
	"database/sql"
	"errors"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type ForumSource struct {
	db *sql.DB
}

func NewForumSource(db *sql.DB) *ForumSource {
	return &ForumSource{db: db}
}

// create func fetch forum
func (f *ForumSource) FetchForum() ([]Forum, error) {
	var sqlStatement string
	var forums []Forum

	sqlStatement = `
	SELECT
		u.id,
		u.email,
		u.name,
		u.phone,
		u.address,
		u.photo,
		u.role,
		f.id,
		f.title,
		f.question,
		f.question_photo,
		f.answer,
		f.answer_photo,
		f.created_at,
		f.updated_at,
		f.users_mentor_id,
		um.about,
		um.rating_sum,
		um.rating_count,
		c.id,
		c.name,
		c.desc
	FROM 
		forums f
	LEFT JOIN
		users u ON f.users_id = u.id
	LEFT JOIN
		users_mentor um ON f.users_mentor_id = um.users_id
	LEFT JOIN
		courses c ON f.courses_id = c.id
	ORDER BY
		f.id DESC
	`

	rows, err := f.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var forum Forum
		err = rows.Scan(
			&forum.UserID,
			&forum.Email,
			&forum.Name,
			&forum.Phone,
			&forum.Address,
			&forum.Photo,
			&forum.Role,
			&forum.ID,
			&forum.Title,
			&forum.Question,
			&forum.QuestionPhoto,
			&forum.Answer,
			&forum.AnswerPhoto,
			&forum.CreatedAt,
			&forum.UpdatedAt,
			&forum.UserMentorID,
			&forum.About,
			&forum.RatingSum,
			&forum.RatingCount,
			&forum.CourseID,
			&forum.CourseName,
			&forum.CourseDesc,
		)
		if err != nil {
			return nil, err
		}
		forums = append(forums, forum)
	}

	return forums, nil
}
// create func fetch forum by id
func (f *ForumSource) FetchForumByID(id int64) (Forum, error) {
	var sqlStatement string
	var forum Forum

	sqlStatement = `
	SELECT
		u.id,
		u.email,
		u.name,
		u.phone,
		u.address,
		u.photo,
		u.role,
		f.id,
		f.title,
		f.question,
		f.question_photo,
		f.answer,
		f.answer_photo,
		f.created_at,
		f.updated_at,
		f.users_mentor_id,
		um.about,
		um.rating_sum,
		um.rating_count,
		c.id,
		c.name,
		c.desc
	FROM 
		forums f
	LEFT JOIN
		users u ON f.users_id = u.id
	LEFT JOIN
		users_mentor um ON f.users_mentor_id = um.users_id
	LEFT JOIN
		courses c ON f.courses_id = c.id
	WHERE
		f.id = ?
	`

	row := f.db.QueryRow(sqlStatement, id)
	err := row.Scan(
		&forum.UserID,
		&forum.Email,
		&forum.Name,
		&forum.Phone,
		&forum.Address,
		&forum.Photo,
		&forum.Role,
		&forum.ID,
		&forum.Title,
		&forum.Question,
		&forum.QuestionPhoto,
		&forum.Answer,
		&forum.AnswerPhoto,
		&forum.CreatedAt,
		&forum.UpdatedAt,
		&forum.UserMentorID,
		&forum.About,
		&forum.RatingSum,
		&forum.RatingCount,
		&forum.CourseID,
		&forum.CourseName,
		&forum.CourseDesc,
	)
	if err != nil {
		return forum, err
	}

	return forum, nil
}

// create func for insert question on forums
func (f *ForumSource) InsertQuestion(userID int64, CourseID int64, title string, question string, questionPhoto string, createdAt time.Time, updatedAt time.Time) (Forum, error) {
	var sqlStatement string
	var forum Forum

	// cannot insert if title is already exist
	sqlStatement = `
	SELECT title FROM forums WHERE title LIKE ?
	`
	row := f.db.QueryRow(sqlStatement, "%"+title+"%")
	err := row.Scan(&forum.Title)
	if err == nil {
		return forum, errors.New("title is already exist")
	}

	sqlStatement = `
	INSERT INTO forums (users_id, courses_id, title, question, question_photo, created_at, updated_at)
	VALUES (?, ?, ?, ?, ?, ?, ?)
	`
	_, err = f.db.Exec(sqlStatement, userID, CourseID, title, question, questionPhoto, createdAt, updatedAt)
	if err != nil {
		return forum, err
	}

	return Forum{UserID: userID, CourseID: CourseID, Title: title, Question: question, QuestionPhoto: questionPhoto, CreatedAt: createdAt, UpdatedAt: updatedAt}, nil
}
