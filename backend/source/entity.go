package source

import (
	"database/sql"
	"time"
)

// create struct for user entity and set fields
type User struct {
	ID        int64     `db:"id" json:"id"`
	Email     string    `db:"email" json:"email"`
	Password  string    `db:"password" json:"password"`
	Name      string    `db:"name" json:"name"`
	Phone     string    `db:"phone" json:"phone"`
	Address   string    `db:"address" json:"address"`
	Photo     string    `db:"photo" json:"photo"`
	Role      string    `db:"role" json:"role"`
	Logedin   bool      `db:"logedin" json:"logedin"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
	UpdatedAt time.Time `db:"updated_at" json:"updated_at"`
}

type Course struct {
	ID        int64     `db:"id" json:"id"`
	Name      string    `db:"name" json:"name"`
	Desc      string    `db:"desc" json:"desc"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
	UpdatedAt time.Time `db:"updated_at" json:"updated_at"`
}

type UserMentor struct {
	ID          int64     `db:"id" json:"id"`
	UserID      int64     `db:"users_id" json:"users_id"`
	CourseID    int64     `db:"courses_id" json:"courses_id"`
	Email       string    `db:"email" json:"email"`
	Password    string    `db:"password" json:"password"`
	Name        string    `db:"name" json:"name"`
	Phone       string    `db:"phone" json:"phone"`
	Address     string    `db:"address" json:"address"`
	Photo       string    `db:"photo" json:"photo"`
	Role        string    `db:"role" json:"role"`
	Logedin     bool      `db:"logedin" json:"logedin"`
	CreatedAt   time.Time `db:"created_at" json:"created_at"`
	UpdatedAt   time.Time `db:"updated_at" json:"updated_at"`
	About       string    `db:"about" json:"about"`
	RatingSum   float64   `db:"rating_sum" json:"rating_sum"`
	RatingCount int64     `db:"rating_count" json:"rating_count"`
	CourseName  string    `db:"name" json:"course_name"`
	CourseDesc  string    `db:"desc" json:"course_desc"`
}

type Forum struct {
	ID            int64           `db:"id" json:"id"`
	UserID        int64           `db:"users_id" json:"users_id"`
	UserMentorID  sql.NullInt64   `db:"users_mentor_id" json:"users_mentor_id"`
	CourseID      int64           `db:"courses_id" json:"courses_id"`
	Title         string          `db:"title" json:"title"`
	Question      string          `db:"question" json:"question"`
	QuestionPhoto string          `db:"question_photo" json:"question_photo"`
	Answer        sql.NullString  `db:"answer" json:"answer"`
	AnswerPhoto   sql.NullString  `db:"answer_photo" json:"answer_photo"`
	CreatedAt     time.Time       `db:"created_at" json:"created_at"`
	UpdatedAt     time.Time       `db:"updated_at" json:"updated_at"`
	Email         string          `db:"email" json:"email"`
	Name          sql.NullString  `db:"name" json:"name"`
	Phone         string          `db:"phone" json:"phone"`
	Address       string          `db:"address" json:"address"`
	Photo         string          `db:"photo" json:"photo"`
	Role          string          `db:"role" json:"role"`
	About         sql.NullString  `db:"about" json:"about"`
	RatingSum     sql.NullFloat64 `db:"rating_sum" json:"rating_sum"`
	RatingCount   sql.NullInt64   `db:"rating_count" json:"rating_count"`
	CourseName    sql.NullString  `db:"name" json:"course_name"`
	CourseDesc    sql.NullString  `db:"desc" json:"course_desc"`
}
