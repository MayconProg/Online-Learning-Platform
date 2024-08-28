import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const courses = await prisma.course.findMany({});

    if (courses == 0) {
      return res.status(404).json({ message: "No Courses Posted Yet!" });
    }

    return res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as listCoursesRoute };
