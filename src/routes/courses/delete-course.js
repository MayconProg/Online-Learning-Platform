import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.delete("/delete-course/:id", async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

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
