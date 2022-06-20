package source

import (
	"database/sql"
	"errors"
	"time"
)

type CourseSource struct {
	db *sql.DB
}

func NewCoursesSource(db *sql.DB) *CourseSource {
	return &CourseSource{db: db}
}

// create function for fetch all courses
func (c *CourseSource) FetchAllCourses() ([]Course, error) {
	var courses []Course

	rows, err := c.db.Query("SELECT * FROM courses")
	if err != nil {
		return courses, err
	}
	defer rows.Close()

	for rows.Next() {
		var course Course
		err := rows.Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
		if err != nil {
			return courses, err
		}
		courses = append(courses, course)
	}

	return courses, nil
}

// create function for fetch course by id
func (c *CourseSource) FetchCourseByID(id int64) (Course, error) {
	var course Course

	row := c.db.QueryRow("SELECT * FROM courses WHERE id = ?", id)
	err := row.Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
	if err != nil {
		return course, err
	}

	return course, nil
}

// create function for fetch course by name
func (c *CourseSource) FetchCourseByName(name string) (Course, error) {
	var course Course

	row := c.db.QueryRow("SELECT * FROM courses WHERE name = ?", name)
	err := row.Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
	if err != nil {
		return course, err
	}

	return course, nil
}

// create function for insert new course, if course already exist return error
func (c *CourseSource) NewCourse(name string, desc string, createdAt time.Time, updatedAt time.Time) (Course, error) {
	var course Course

	row := c.db.QueryRow("SELECT * FROM courses WHERE name = ?", name)
	err := row.Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
	if err == nil {
		return course, errors.New("course already exist")
	}

	_, err = c.db.Exec("INSERT INTO courses (name, desc, created_at, updated_at) VALUES (?, ?, ?, ?)", name, desc, createdAt, updatedAt)
	if err != nil {
		return course, err
	}

	return Course{Name: name, Desc: desc, CreatedAt: createdAt, UpdatedAt: updatedAt}, nil
}
	

// create function for update course by id
func (c *CourseSource) UpdateCourse(id int64, name string, desc string, updatedAt time.Time) (Course, error) {
	var course Course

	err := c.db.QueryRow("SELECT * FROM courses WHERE id = ?", id).Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
	if err != nil {
		return course, err
	}

	_, err = c.db.Exec("UPDATE courses SET name = ?, desc = ?, updated_at = ? WHERE id = ?", name, desc, updatedAt, id)
	if err != nil {
		return course, err
	}

	course, err = c.FetchCourseByID(id)
	if err != nil {
		return course, err
	}

	return course, nil
}

// create function for delete course by id
func (c *CourseSource) DeleteCourse(id int64) (Course, error) {
	var course Course

	err := c.db.QueryRow("SELECT * FROM courses WHERE id = ?", id).Scan(&course.ID, &course.Name, &course.Desc, &course.CreatedAt, &course.UpdatedAt)
	if err != nil {
		return course, err
	}

	_, err = c.db.Exec("DELETE FROM courses WHERE id = ?", id)
	if err != nil {
		return course, err
	}

	return course, nil
}