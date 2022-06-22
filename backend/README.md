# Backend CODESWER

## Requirements

- Have three users (user, admin, mentor)
- Users should able to login
- Users should able to register
- Users should able to logout
- Users should able to check available all course or skill
- If users login, should able to update profile
- If users login as admin, should able to CRUD Users and Course or skill

## Available APIs

- `POST`: `/api/user/login`
- `POST`: `/api/user/register`
- `POST`: `/api/user/logout`
- `GET`: `/api/course`
- `GET`: `/api/course/id`
- `GET`: `/api/course/name`

## Available APIs with AuthMiddleware
- `GET`: `/api/user`
- `GET`: `/api/user/id`
- `GET`: `/api/user/logged`
- `PUT`: `/api/user/update`

## Available APIs with AuthMiddleware and AdminMiddleware
- `DELETE`: `/api/user/delete`
- `POST`: `/api/course/create`
- `PUT`: `/api/course/update`
- `DELETE`: `/api/course/delete`

# How to run service
1. Migration: run `main.go` inside directory `backend/db/migration/` for Migration database SQLite
```
go run backend/db/migration/main.go  
```
2. Main: run `main.go` inside directory `backend/` to running main Service
```
go run backend/main.go
```
3. Test Case: run `course_test.go` & `course_suite_test.go` inside directory
`backend/test` with `go test` or `ginkgo`
```
go test backend/test
```
or
```
ginkgo backend/test
```

*nb : You must run inside the root directory `final-project-engineering-54`.

## Dummy Account
- Admin : `admin@gmail.com`, `123456`
- Users : `user@gmail.com`, `123456`
- Mentor 1 : `mentor1@gmail.com`, `123456`
- Mentor 2 : `mentor2@gmail.com`, `123456`
