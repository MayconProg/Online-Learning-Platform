import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.post("/create-course", async (req, res) => {
  const { title, summary, thumbnail } = req.body;
  const { userId, name } = req.userData;

  if (!title || !summary || !owner || !thumbnail || !userId || !name) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const course = await prisma.course.create({
      data: {
        title,
        summary,
        owner: name,
        thumbnail,
        userId,
      },
    });

    return res
      .status(201)
      .json({ message: "Course Was Created Succesfully!", course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as createCourseRoute };
