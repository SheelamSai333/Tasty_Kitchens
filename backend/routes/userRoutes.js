import express from "express";
import { requireAuth } from "@clerk/express";
import User from "../model/User.js";

const router = express.Router();

router.post("/sync-user", requireAuth(), async (req, res) => {
  const clerkUserId = req.auth.userId;

  try {
    let user = await User.findOne({ clerkUserId });

    if (!user) {
      user = await User.create({ clerkUserId });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "User sync failed" });
  }
});

export default router;