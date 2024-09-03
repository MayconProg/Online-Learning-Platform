import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.delete("/delete-course/:id", async (req, res) => {
  const courseId = req.params.id;
  const userData = req.userData;

  console.log(userData, courseId);

  let course;

  try {
    if (userData.role === "admin") {
      course = await prisma.course.findUnique({
        where: { id: courseId },
      });
    } else {
      course = await prisma.course.findUnique({
        where: { id: courseId, userId: userData.id },
      });
    }

    if (!course) {
      return res.status(404).json({ message: "Course Not Founded!" });
    }

    await prisma.course.delete({
      where: { id: courseId },
    });

    return res.status(200).json({ message: "Course Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as deleteCourseRoute };
