import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.put("/update-course/:id", async (req, res) => {
  const courseId = req.params.id;
  const data = req.body;

  if (data.owner) {
    return res.status(401).json({ message: "You Can't Update The Owner!" });
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return res.status(404).json({ message: "Course Not Found!" });
    }

    const courseUpdate = await prisma.course.update({
      where: { id: courseId },
      data: data,
    });

    return res
      .status(200)
      .json({ message: "Course Updated Successfully!", courseUpdate });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as updateCourseRoute };
