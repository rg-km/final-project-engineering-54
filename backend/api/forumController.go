package api

import (
	"encoding/json"
	"net/http"

	// "database/sql"
	"time"
)

type listForum struct {
	ID            int64     `json:"id"`
	UserID        int64     `json:"users_id"`
	UserMentorID  int64     `json:"users_mentor_id"`
	CourseID      int64     `json:"courses_id"`
	Title         string    `json:"title"`
	Question      string    `json:"question"`
	QuestionPhoto string    `json:"question_photo"`
	Answer        string    `json:"answer"`
	AnswerPhoto   string    `json:"answer_photo"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
	Email         string    `json:"email"`
	Name          string    `json:"name"`
	Phone         string    `json:"phone"`
	Address       string    `json:"address"`
	Photo         string    `json:"photo"`
	Role          string    `json:"role"`
	About         string    `json:"about"`
	RatingSum     float64   `json:"rating_sum"`
	RatingCount   int64     `json:"rating_count"`
	CourseName    string    `json:"course_name"`
	CourseDesc    string    `json:"course_desc"`
}

type listForumSuccess struct {
	Forum []listForum `json:"forum"`
}

type listForumError struct {
	Error string `json:"error"`
}

// create func to get list forum
func (api *API) getForum(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := listForumSuccess{}
	response.Forum = make([]listForum, 0)

	forum, err := api.forumSource.FetchForum()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(listForumError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(listForumError{Error: err.Error()})
		return
	}

	for _, f := range forum {
		response.Forum = append(response.Forum, listForum{
			ID:            f.ID,
			UserID:        f.UserID,
			UserMentorID:  f.UserMentorID.Int64,
			CourseID:      f.CourseID.Int64,
			Title:         f.Title,
			Question:      f.Question,
			QuestionPhoto: f.QuestionPhoto,
			Answer:        f.Answer,
			AnswerPhoto:   f.AnswerPhoto,
			CreatedAt:     f.CreatedAt,
			UpdatedAt:     f.UpdatedAt,
			Email:         f.Email,
			Name:          f.Name.String,
			Phone:         f.Phone,
			Address:       f.Address,
			Photo:         f.Photo,
			Role:          f.Role,
			About:         f.About.String,
			RatingSum:     f.RatingSum.Float64,
			RatingCount:   f.RatingCount.Int64,
			CourseName:    f.CourseName.String,
			CourseDesc:    f.CourseDesc.String,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	encoder.Encode(response)
}
