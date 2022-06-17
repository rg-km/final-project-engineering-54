package source

import (
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
