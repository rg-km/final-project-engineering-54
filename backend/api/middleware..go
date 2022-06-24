// build middleware for api
package api

import (
	"net/http"
	"encoding/json"
	"context"

	"github.com/dgrijalva/jwt-go"
)

// creat func for allow origin
func (api *API) AllowOrigin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
	}
}

// create func for auth middleware
func (api *API) AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		// get token from cookie
		c, err := r.Cookie("token")
		if err != nil {
			if err == http.ErrNoCookie {
				w.WriteHeader(http.StatusUnauthorized)
				encoder.Encode(LoginError{Error: err.Error()})
				return
			}
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(LoginError{Error: err.Error()})
			return
		}

		// decode token
		tknStr := c.Value
		// parse token
		claims := &Claims{}

		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				w.WriteHeader(http.StatusUnauthorized)
				encoder.Encode(LoginError{Error: err.Error()})
				return
			}
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(LoginError{Error: err.Error()})
			return
		}

		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(LoginError{Error: err.Error()})
			return
		}

		ctx := context.WithValue(r.Context(), "email", claims.Email)
		ctx = context.WithValue(ctx, "id", claims.Id)
		ctx = context.WithValue(ctx, "role", claims.Role)
		ctx = context.WithValue(ctx, "props", claims)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// create func for admin middleware	for check role admin
func (api *API) AdminMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		role := r.Context().Value("role").(string)
		if role != "admin" {
			w.WriteHeader(http.StatusForbidden)
			encoder.Encode(LoginError{Error: "you are not admin"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

// create func for mentor middlewar for check role mentor
func (api *API) MentorMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		role := r.Context().Value("role").(string)
		if role != "mentor" && role != "admin" {
			w.WriteHeader(http.StatusForbidden)
			encoder.Encode(LoginError{Error: "you are not mentor or admin"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

// create func GET for method GET
func (api *API) GET(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(LoginError{Error: "need method GET"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

// create func POST for method POST
func (api *API) POST(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodPost {
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(LoginError{Error: "need method POST"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

// create func PUT for method PUT
func (api *API) PUT(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodPut {
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(LoginError{Error: "need method PUT"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

// create func DELETE for method DELETE
func (api *API) DELETE(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodDelete {
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(LoginError{Error: "need method DELETE"})
			return
		}

		next.ServeHTTP(w, r)
	})
}