# Online Learning Platform

## Description
An online learning platform built with **JavaScript**, **Express**, and **PostgreSQL** that allows users to enroll in courses, track progress, and manage learning materials. The platform implements **RBAC (Role-Based Access Control)** to ensure proper authorization levels and uses **JWT (JSON Web Tokens)** for secure authentication.

## Features
- **User Authentication & Authorization**: Secure login and registration using **bcrypt** for password hashing.
- **JWT Token Authentication**: Secure API access using JSON Web Tokens.
- **RBAC (Role-Based Access Control)**: Different roles such as Admin, Instructor, and Student.
- **Course Management**: Create, update, delete, and list courses.
- **Enrollment System**: Users can enroll in courses and track progress.
- **Middleware Implementation**: Secure routes and enforce permissions.
- **Database Management**: Using **Prisma ORM** with **PostgreSQL**.

## Technologies Used
- **JavaScript**: Backend development.
- **Express**: Server framework.
- **JWT (JSON Web Tokens)**: Authentication mechanism.
- **RBAC**: Role-based access control for authorization.
- **Prisma**: Database ORM.
- **PostgreSQL**: Relational database.
- **Middleware**: Request processing and security.
- **bcrypt**: Password hashing for authentication.

## Installation
### Prerequisites
- Node.js (v16+ recommended)
- PostgreSQL (Installed and configured)
- NPM or Yarn

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mayconProg/online-learning-platform.git
   cd online-learning-platform
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file and add the following:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database
   JWT_SECRET=your_secret_key
   ```

4. **Run database migrations:**
   ```sh
   npx prisma migrate dev
   ```

5. **Start the server:**
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST /users/create-user` - Create a new user
- `POST /users/user-login` - Login and receive a JWT token
- `POST /users/change-password` - Change a user password

### Courses
- `GET /courses` - List all courses
- `GET /courses/:id` - Get course details
- `POST /courses/create-course` - Create a new course (Admin/Instructor only)
- `PUT /courses//update-course/:id` - Update a course (Admin/Instructor only)
- `DELETE /courses/delete-course/:id` - Delete a course (Admin/Instructor only)

## Middleware
- **Authentication Middleware**: Verifies JWT token for protected routes.
- **Authorization Middleware**: Ensures users have the correct role before accessing certain endpoints.

## Security Measures
- **Password hashing with bcrypt** to protect user credentials.
- **JWT authentication** for secure API access.
- **Role-Based Access Control (RBAC)** to restrict actions based on user roles.
- **Middleware protection** for sensitive routes.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
   
---
Developed with ❤️ using JavaScript & Express.

