# Backend CODESWER

## Requirements

- Have two users (maybe next time three users), now just have admin & users.
- User should able to login
- User should able to register
- User should able to logout
- ....

## Available APIs

- `POST`: `/api/user/login`
- `POST`: `/api/user/register`
- `POST`: `/api/user/logout`

# How to run service
1. Migration: run `main.go` inside directory `backend/db/migration/` for Migration database SQLite
```
go run backend/db/migration/main.go  
```
2. Main: run `main.go` inside directory `backend/` to running main Service
```
go run backend/main.go
```
3. Test Case: inprogress

## Dummy Account
- Admin : `admin@gmail.com`, `123456`
- Users : `user@gmail.com`, `123456`