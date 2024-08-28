import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return res.status(404).json({ message: "Course Not Founded!" });
    }

    return res
      .status(200)
      .json({ message: "Course Founded Successfully!", course });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as courseDetailsRoute };
