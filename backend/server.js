import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import registerRouter from "./routers/register.js";
import cartRouter from "./routers/cart.Router.js";
import productRouter from "./routers/product.Router.js";
import paymentRouter from "./routers/payments.Router.js";
import couponRouter from "./routers/coupon.Router.js";
import analyticsRouter from "./routers/analytics.Router.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 2003;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", registerRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", productRouter);
app.use("/api/coupons", couponRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/analytics", analyticsRouter);

// Start server after MongoDB connection
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();