package api

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"
)

type ListCourse struct {
	ID        int64     `json:"id"`
	Name      string    `json:"name"`
	Desc      string    `json:"desc"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type getCourseSuccess struct {
	Course []ListCourse `json:"course"`
}

type getCourseError struct {
	Error string `json:"error"`
}

// create function for get all courses
func (api *API) getCourse(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getCourseSuccess{}
	response.Course = make([]ListCourse, 0)

	courses, err := api.courseSource.FetchAllCourses()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getCourseError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getCourseError{Error: err.Error()})
		return
	}

	for _, course := range courses {
		response.Course = append(response.Course, ListCourse{
			ID:        course.ID,
			Name:      course.Name,
			Desc:      course.Desc,
			CreatedAt: course.CreatedAt,
			UpdatedAt: course.UpdatedAt,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for get course by id
func (api *API) getCourseByID(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getCourseSuccess{}
	response.Course = make([]ListCourse, 0)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	course, err := api.courseSource.FetchCourseByID(int64(id))
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getCourseError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getCourseError{Error: err.Error()})
		return
	}

	response.Course = append(response.Course, ListCourse{
		ID:        course.ID,
		Name:      course.Name,
		Desc:      course.Desc,
		CreatedAt: course.CreatedAt,
		UpdatedAt: course.UpdatedAt,
	})

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for get course by name
func (api *API) getCourseByName(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := getCourseSuccess{}
	response.Course = make([]ListCourse, 0)

	name := r.URL.Query().Get("name")
	courses, err := api.courseSource.FetchCourseByName(name)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(getCourseError{Error: err.Error()})
		}
	}()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(getCourseError{Error: err.Error()})
		return
	}

	response.Course = append(response.Course, ListCourse{
		ID:        courses.ID,
		Name:      courses.Name,
		Desc:      courses.Desc,
		CreatedAt: courses.CreatedAt,
		UpdatedAt: courses.UpdatedAt,
	})

	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
}

// create func for add new course
func (api *API) addCourse(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var course ListCourse
	err := json.NewDecoder(r.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: "Invalid request payload"})
		return
	}

	res, err := api.courseSource.NewCourse(course.Name, course.Desc, time.Now(), time.Now())

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(res)
}

// create func for update course
func (api *API) updateCourse(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var course ListCourse
	err := json.NewDecoder(r.Body).Decode(&course)

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: "Invalid request payload"})
		return
	}

	res, err := api.courseSource.UpdateCourse(int64(id), course.Name, course.Desc, time.Now())

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(res)
	w.Write([]byte("Update course success"))
}

// create func for delete course
func (api *API) deleteCourse(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: "Invalid request payload"})
		return
	}

	res, err := api.courseSource.DeleteCourse(int64(id))

	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(getCourseError{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(res)
	w.Write([]byte("Delete course success"))
}
