package api

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"
)

type listMentor struct {
	UserID      int64     `json:"users_id"`
	CourseID    int64     `json:"courses_id"`
	Email       string    `json:"email"`
	Password    string    `json:"password"`
	Name        string    `json:"name"`
	Phone       string    `json:"phone"`
	Address     string    `json:"address"`
	Photo       string    `json:"photo"`
	Role        string    `json:"role"`
	Logedin     bool      `json:"logedin"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	About       string    `json:"about"`
	RatingSum   float64   `json:"rating_sum"`
	RatingCount int64     `json:"rating_count"`
	CourseName  string    `json:"course_name"`
	CourseDesc  string    `json:"course_desc"`
}

type listMentorSuccess struct {
	UserMentor []listMentor `json:"user_mentor"`
}

type listMentorError struct {
	Error string `json:"error"`
}

// create function to get list mentor
func (api *API) getMentor(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := listMentorSuccess{}
	response.UserMentor = make([]listMentor, 0)

	mentor, err := api.usersMentorSource.FetchUserMentor()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(listMentorError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(listMentorError{Error: err.Error()})
		return
	}

	for _, user := range mentor {
		response.UserMentor = append(response.UserMentor, listMentor{
			UserID:   user.UserID,
			CourseID: user.CourseID,
			Email:    user.Email,
			// Password:    user.Password,
			Name:        user.Name,
			Phone:       user.Phone,
			Address:     user.Address,
			Photo:       user.Photo,
			Role:        user.Role,
			Logedin:     user.Logedin,
			CreatedAt:   user.CreatedAt,
			UpdatedAt:   user.UpdatedAt,
			About:       user.About,
			RatingSum:   user.RatingSum,
			RatingCount: user.RatingCount,
			CourseName:  user.CourseName,
			CourseDesc:  user.CourseDesc,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create function to get mentor by id
func (api *API) getMentorByID(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := listMentorSuccess{}
	response.UserMentor = make([]listMentor, 0)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	mentor, err := api.usersMentorSource.FetchUserMentorByID(int64(id))
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(listMentorError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(listMentorError{Error: err.Error()})
		return
	}

	response.UserMentor = append(response.UserMentor, listMentor{
		UserID:   mentor.UserID,
		CourseID: mentor.CourseID,
		Email:    mentor.Email,
		// Password:    mentor.Password,
		Name:        mentor.Name,
		Phone:       mentor.Phone,
		Address:     mentor.Address,
		Photo:       mentor.Photo,
		Role:        mentor.Role,
		Logedin:     mentor.Logedin,
		CreatedAt:   mentor.CreatedAt,
		UpdatedAt:   mentor.UpdatedAt,
		About:       mentor.About,
		RatingSum:   mentor.RatingSum,
		RatingCount: mentor.RatingCount,
		CourseName:  mentor.CourseName,
		CourseDesc:  mentor.CourseDesc,
	})

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create function to add mentor
func (api *API) addMentor(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var userMentor listMentor
	err := json.NewDecoder(r.Body).Decode(&userMentor)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(listMentorError{Error: err.Error()})
		return
	}
	mentor, err := api.usersMentorSource.FetchUserMentorByID(userMentor.UserID)
	if err != nil && mentor.UserID != 0 {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(listMentorError{Error: "User ID already exists"})
		return
	}

	res, err := api.usersMentorSource.InsertUserMentor(userMentor.Email, userMentor.Password, userMentor.Name, userMentor.Phone, userMentor.Address, userMentor.Photo, userMentor.Role, userMentor.Logedin, time.Now(), time.Now(), userMentor.About, userMentor.RatingSum, userMentor.RatingCount, userMentor.CourseID, userMentor.CourseName, userMentor.CourseDesc)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(listMentorError{Error: err.Error()})
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res)
}
