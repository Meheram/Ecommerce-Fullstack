import express from "express";

import {
  getAllProducts,
  getFeaturedProducts,
  createProduct,
  deleteProduct,
  toggleFeaturedProduct,
  getProductsByCategory,
  getRecommendedProducts,
} from "../controllers/product.controller.js";

import {
  Auth,
  admin,
} from "../middleware/auth.middeware.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);

// Admin routes
router.post("/", Auth, admin, createProduct);
router.patch("/:id", Auth, admin, toggleFeaturedProduct);
router.delete("/:id", Auth, admin, deleteProduct);

export default router;