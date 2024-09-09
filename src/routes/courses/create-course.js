import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.post("/create-course", async (req, res) => {
  const { title, summary, thumbnail, plan } = req.body;
  const user = req.userData;

  if (!title || !summary || !thumbnail || !plan) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const course = await prisma.course.create({
      data: {
        title,
        summary,
        owner: user.name,
        thumbnail,
        plan,
        userId: user.id,
      },
    });

    return res
      .status(201)
      .json({ message: "Course Was Created Successfully!", course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as createCourseRoute };
