import express from "express";
import { prisma } from "../../libs/prisma.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.put("/change-password", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid Credentials!" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await prisma.user.update({
      where: { email },
      data: {
        password: hashPassword,
      },
    });

    return res.status(200).json({ message: "The Password Was Updated!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

export default router;
