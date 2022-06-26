package source

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type ForumSource struct {
	db *sql.DB
}

func NewForumSource(db *sql.DB) *ForumSource {
	return &ForumSource{db: db}
}

// create func fetch forum using join query, foreign key
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
		courses c ON um.courses_id = c.id
	
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
