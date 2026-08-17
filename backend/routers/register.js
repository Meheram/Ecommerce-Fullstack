import express from "express";

import {
  signUp,
  login,
  logout,
  refreshToken,
  getProfile,
} from "../controllers/authController.js";

import { Auth } from "../middleware/auth.middeware.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

router.get("/profile", Auth, getProfile);

export default router;