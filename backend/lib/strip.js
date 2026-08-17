

import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/.env") });

// چک کن که کلید وجود دارد
if (!process.env.STRIPE_SECRET_KEY) {
  console.error(" STRIPE_SECRET_KEY not found in .env file");
  process.exit(1);
}

// ساختن شی Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

// تست اتصال
const testStripeConnection = async () => {
  try {
    await stripe.accounts.retrieve(); // یک درخواست تستی به Stripe
    console.log("✅ Stripe connected successfully");
  } catch (error) {
    console.error("❌ Stripe connection failed:", error.message);
  }
};

testStripeConnection();
