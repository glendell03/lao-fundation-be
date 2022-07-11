import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    const user = await prisma.user.create({ data: { email, name } });
    res.json({ user, message: "User create successfully" });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};
