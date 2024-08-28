import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.post("/create-course", async (req, res) => {
  const { title, summary, owner, thumbnail } = req.body;

  if (!title || !summary || !owner || !thumbnail) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const course = await prisma.course.create({
      data: {
        title,
        summary,
        owner,
        thumbnail,
      },
    });

    return res
      .status(201)
      .json({ message: "Course Was Created Succesfully!", course });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as createCourseRoute };
