package source

import (
	"time"
)

// create struct for user entity and set fields
type User struct {
	ID        int64     `json:"id"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	Name      string    `json:"name"`
	Role      string    `json:"role"`
	Phone     string    `json:"phone"`
	Address   string    `json:"address"`
	Status    string    `json:"status"`
	Photo     string    `json:"photo"`
	Logedin   bool      `json:"logedin"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
