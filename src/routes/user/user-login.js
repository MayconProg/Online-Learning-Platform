import express from "express";
import { prisma } from "../../libs/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/user-login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password!" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.name, plan: user.plan },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({ message: "Used Logged In!", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!", error });
  }
});

export default router;
