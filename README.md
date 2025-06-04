# React-Express Authentication App

This project implements a user authentication system using **React** for the frontend and **Express** for the backend. User credentials are securely stored in **MySQL**, while user profile data is stored in **MongoDB**.

---

## Features

- User Signup with username and password
- User Login with validation and error handling
- Password hashing and secure storage in MySQL
- User profile data stored and managed in MongoDB
- JWT-based session management (optional for enhancement)
- Responsive UI built with React and Tailwind CSS

---

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Databases:** MySQL (for credentials), MongoDB (for user profiles)
- **Security:** bcrypt for password hashing
- **HTTP Client:** Axios (React side)

How It Works
Signup: User submits username and password via React form. The backend hashes the password and stores credentials in MySQL. Optionally, profile info can be created in MongoDB.

Login: User credentials are verified against MySQL. If valid, user is logged in and profile data is fetched from MongoDB.

Profile Data: User-specific profile info is managed separately in MongoDB, allowing flexible storage of complex user data.



