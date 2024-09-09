import express from "express";

// Imports For Users Routes
import createUserRoute from "./src/routes/user/create-user.js";
import userLoginRoute from "./src/routes/user/user-login.js";
import changePasswordRoute from "./src/routes/user/change-password.js";

// Imports For Courses Routes
import { createCourseRoute } from "./src/routes/courses/create-course.js";
import { updateCourseRoute } from "./src/routes/courses/update-course.js";
import { deleteCourseRoute } from "./src/routes/courses/delete-course.js";
import { listCoursesRoute } from "./src/routes/courses/list-courses.js";
import { courseDetailsRoute } from "./src/routes/courses/course-details.js";

// Middlewares
import { authMiddleware } from "./src/middlewares/auth.js";
import { roleAuthMiddleware } from "./src/middlewares/roleAuth.js";

const app = express();
app.use(express.json());

// Users Routes
app.use("/users", createUserRoute);
app.use("/users", userLoginRoute);
app.use("/users", changePasswordRoute);

// Courses Routes
app.use(
  "/courses",
  authMiddleware,
  roleAuthMiddleware("admin", "instructor"),
  createCourseRoute
);
app.use(
  "/courses",
  authMiddleware,
  roleAuthMiddleware("admin", "instructor"),
  updateCourseRoute
);
app.use(
  "/courses",
  authMiddleware,
  roleAuthMiddleware("admin", "instructor"),
  deleteCourseRoute
);
app.use("/list-courses", authMiddleware, listCoursesRoute);
app.use("/course-detail", courseDetailsRoute);

app.listen(2108, () => {
  console.log("HTTP Server Running! 🚀");
});
