import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(clerkMiddleware());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/profile", requireAuth(), (req, res) => {
  res.json({
    userId: req.auth.userId,
  });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});