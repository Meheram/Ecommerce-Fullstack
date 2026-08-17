import express from "express";

import {
  checkoutSuccess,
  createCheckoutSession,
} from "../controllers/payment.controller.js";

import { Auth } from "../middleware/auth.middeware.js";

const router = express.Router();

router.post(
  "/create-checkout-session",
  Auth,
  createCheckoutSession
);

router.post(
  "/checkout-success",
  Auth,
  checkoutSuccess
);

export default router;