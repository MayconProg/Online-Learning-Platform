import express from "express";
import { prisma } from "../../libs/prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = req.userData;

    function handlePlan(plan) {
      if (plan === "premium") return ["premium", "pro", "basic"];
      if (plan === "pro") return ["pro", "basic"];
      if (plan === "basic") return ["basic"];
    }

    const courses = await prisma.course.findMany({
      where: {
        plan: { in: handlePlan(user.plan) },
      },
    });

    if (courses == 0) {
      //Make New Tests
      return res.status(404).json({ message: "No Courses Posted Yet!" });
    }

    return res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export { router as listCoursesRoute };
