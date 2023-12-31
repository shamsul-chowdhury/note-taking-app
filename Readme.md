# Note Taking App

## Setup

1. Install dependencies:
   ```bash
   npm install
2. Start the server:
   ```bash
   node ./index.js
3. Run tests:
   ```bash
   npm test
4.	API Endpoints
Authentication

•	POST /auth/register: Register a new user.
	Request body: { "username": "your_username", "password": "your_password" }

•	POST /auth/login: Log in an existing user.
	Request body: { "username": "your_username", "password": "your_password" }
Notes

•	POST /notes: Create a new note.
	Requires authentication.
	Request body: { "title": "Note Title", "body": "Note Body" }

•	GET /notes: Get all notes.
	Requires authentication.

•	GET /notes/:id: Get a specific note.
	Requires authentication.

•	PUT /notes/:id: Update a specific note.
	Requires authentication.
	Request body: { "title": "Updated Title", "body": "Updated Body" }

•	DELETE /notes/:id: Delete a specific note.
	Requires authentication.
