import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.put("/update-course/:id", async (req, res) => {
  const courseId = req.params.id;
  const userData = req.userData;
  const data = req.body;

  let course;

  if (data.owner) {
    return res.status(401).json({ message: "You Can't Update The Owner!" });
  }

  try {
    if (userData.role == "admin") {
      course = await prisma.course.findUnique({
        where: { id: courseId },
      });
    } else {
      course = await prisma.course.findUnique({
        where: { id: courseId, userId: userData.id },
      });

      console.log(userData.id);
    }

    if (!course) {
      return res.status(404).json({ message: "Course Not Founded!" });
    }

    const courseUpdate = await prisma.course.update({
      where: { id: courseId },
      data: data,
    });

    return res
      .status(200)
      .json({ message: "Course Updated Successfully!", courseUpdate });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as updateCourseRoute };
