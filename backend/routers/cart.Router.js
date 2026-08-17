import express from "express";

import {
  addToCart,
  removeAllFromCart,
  updateQuantity,
  getCartProducts,
} from "../controllers/cart.controller.js";

import { Auth } from "../middleware/auth.middeware.js";

const router = express.Router();

router.get("/", Auth, getCartProducts);

router.post("/", Auth, addToCart);

router.delete("/", Auth, removeAllFromCart);

router.put("/:id", Auth, updateQuantity);

export default router;