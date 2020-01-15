# USER CLASSIFICATION

## AUTHENTICATION

- the password is hashed at frontend and backend even if `https`

- If an user is currently in login state, remove the old token and generate a new one.

## AUTHORIZATION

- Each web-token is corresponding to one user at a time. 

- Each user has a list of authorized actions which are stored in database.