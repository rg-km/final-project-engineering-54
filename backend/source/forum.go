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
func (f *ForumSource) FetchForumByID(id int64) ([]Forum, error) {
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
	WHERE
		f.users_id = ?
	`

	rows, err := f.db.Query(sqlStatement, id)
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

// create func count forum
func (f *ForumSource) CountForum() (int64, error) {
	var sqlStatement string
	var count int64

	sqlStatement = `
	SELECT
		COUNT(id)
	FROM 
		forums
	`

	row := f.db.QueryRow(sqlStatement)
	err := row.Scan(&count)
	if err != nil {
		return 0, err
	}

	return count, nil
}

// create func count forum by users_id
func (f *ForumSource) CountForumByID(id int64) (
	int64, error) {
	var sqlStatement string
	var count int64

	sqlStatement = `
	SELECT
		COUNT(id)
	FROM 
		forums
	WHERE
		users_id = ?
	`

	row := f.db.QueryRow(sqlStatement, id)
	err := row.Scan(&count)
	if err != nil {
		return 0, err
	}

	return count, nil
}

// create func for insert question on forums
func (f *ForumSource) InsertQuestion(userID int64, CourseID int64, title string, question string, questionPhoto string, createdAt time.Time, updatedAt time.Time) (Forum, error) {
	var sqlStatement string
	var forum Forum

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

	return Forum{
		UserID:        userID,
		CourseID:      CourseID,
		Title:         title,
		Question:      question,
		QuestionPhoto: sql.NullString{String: questionPhoto, Valid: true},
		CreatedAt:     createdAt,
		UpdatedAt:     updatedAt}, nil
}

// create func for answer from question using update
func (f *ForumSource) AnswerQuestion(id int64, userMentorID int64, answer string, answerPhoto string, updatedAt time.Time) (Forum, error) {
	var sqlStatement string
	var forum Forum

	sqlStatement = `
	UPDATE forums SET users_mentor_id = ?, answer = ?, answer_photo = ?, updated_at = ? WHERE id = ?
	`
	_, err := f.db.Exec(sqlStatement, userMentorID, answer, answerPhoto, updatedAt, id)
	if err != nil {
		return forum, err
	}

	return Forum{
		ID:           id,
		UserMentorID: sql.NullInt64{Int64: userMentorID, Valid: true},
		Answer:       sql.NullString{String: answer, Valid: true},
		AnswerPhoto:  sql.NullString{String: answerPhoto, Valid: true},
		UpdatedAt:    updatedAt}, nil
}

// create func for delete forum
func (f *ForumSource) DeleteForum(id int64) error {
	var sqlStatement string

	sqlStatement = `
	DELETE FROM forums WHERE id = ?
	`

	_, err := f.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}
