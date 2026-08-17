import express from "express";
import { Auth } from "../middleware/auth.middeware.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/", Auth, getCoupon);
router.post("/validate", Auth, validateCoupon);

export default router;
