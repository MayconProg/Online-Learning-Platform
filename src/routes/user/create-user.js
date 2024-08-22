import express from "express";
import { prisma } from "../../libs/prisma.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });

    return res.status(201).json({ message: "User Created Successful!", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export default router;
