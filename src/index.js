import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

import userRoute from "./routes/users.routes";

const prisma = new PrismaClient();
const app = express();

const server = async () => {
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use("/api/user", userRoute);

  // Testing
  app.get("/api/healthchecker", (_, res) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to NodeJs with Prisma and PostgreSQL",
    });
  });

  const PORT = process.env.PORT;

  app.listen(PORT, () =>
    console.log(`🚀 Server ready at: http://localhost:${PORT}`)
  );
};

server()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
