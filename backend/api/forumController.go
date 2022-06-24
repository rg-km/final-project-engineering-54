package api

import (
	"encoding/json"
	"net/http"

	// "strconv"
	"time"
)

type listForum struct {
	ID            int64     `json:"id"`
	UserID        int64     `json:"user_id"`
	CourseID      int64     `json:"course_id"`
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

	for _, user := range forum {
		response.Forum = append(response.Forum, listForum{
			ID:            user.ID,
			UserID:        user.UserID,
			CourseID:      user.CourseID,
			Title:         user.Title,
			Question:      user.Question,
			QuestionPhoto: user.QuestionPhoto,
			Answer:        user.Answer,
			AnswerPhoto:   user.AnswerPhoto,
			CreatedAt:     user.CreatedAt,
			UpdatedAt:     user.UpdatedAt,
			Email:         user.Email,
			Name:          user.Name,
			Phone:         user.Phone,
			Address:       user.Address,
			Photo:         user.Photo,
			Role:          user.Role,
			About:         user.About,
			RatingSum:     user.RatingSum,
			RatingCount:   user.RatingCount,
			CourseName:    user.CourseName,
			CourseDesc:    user.CourseDesc,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	encoder.Encode(response)
}
