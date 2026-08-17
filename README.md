# 🛒 Full-Stack MERN E-Commerce Platform

A modern and full-stack e-commerce application built with the MERN stack. 
This project provides a complete online shopping experience with secure authentication, product management, shopping cart, payments, admin dashboard, analytics, caching, and cloud-based image management.

## 🚀 Live Project

Coming soon...

## 📦 GitHub Repository

https://github.com/Meheram/Ecommerce-Fullstack

---

# ✨ Features

## 👤 Authentication & User Management

- User registration and login
- Secure authentication using JWT
- HTTP-only cookies for authentication tokens
- Access token and refresh token functionality
- Protected routes
- User profile
- Logout functionality
- Role-based authorization
- Admin authentication

## 🛍️ E-Commerce Features

- Browse products
- Featured products
- Product categories
- Product recommendations
- Product details
- Add products to cart
- Remove products from cart
- Update product quantity
- Shopping cart management
- Order processing
- Purchase success and cancellation pages

## 👨‍💼 Admin Dashboard

The application includes an admin dashboard for managing the store.

Admin features include:

- Create products
- Delete products
- Update product status
- Toggle featured products
- Manage products
- View analytics
- Manage store data
- Protected admin routes

## 💳 Secure Payments

The application integrates **Stripe** for secure online payments.

Features include:

- Stripe Checkout
- Secure payment processing
- Checkout session creation
- Payment success handling
- Payment cancellation handling

> Stripe secret keys are stored in environment variables and are never committed to the repository.

## ⚡ Redis

Redis is integrated into the backend for caching and improving application performance.

Redis can be used for:

- Caching frequently requested data
- Improving response performance
- Temporary data storage
- Reducing unnecessary database requests

The project uses **Upstash Redis** for cloud-based Redis infrastructure.

## ☁️ Cloudinary

Cloudinary is used for cloud-based image management.

Features include:

- Image uploading
- Cloud image storage
- Image URL management
- Product image management

## 📊 Analytics

The project contains an analytics system for monitoring important store information.

Analytics can be used to display:

- Sales statistics
- Revenue information
- Product statistics
- User-related statistics
- Store performance

---

# 🧑‍💻 Technology Stack

## Frontend

- React.js
- Vite
- React Router
- Zustand
- Axios
- CSS
- JavaScript

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- CORS

## Database

- MongoDB Atlas

## Caching

- Redis
- Upstash Redis

## Payments

- Stripe

## Image Storage

- Cloudinary

---

# 📁 Project Structure

```text
Ecommerce-Fullstack/
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── analytics.controller.js
│   │   ├── authController.js
│   │   ├── cart.controller.js
│   │   ├── coupon.controller.js
│   │   ├── payment.controller.js
│   │   └── product.controller.js
│   │
│   ├── lib/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   ├── redis.js
│   │   └── strip.js
│   │
│   ├── middleware/
│   │   └── auth.middeware.js
│   │
│   ├── models/
│   │   ├── coupon.model.js
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── userModel.js
│   │
│   ├── routers/
│   │   ├── analytics.Router.js
│   │   ├── cart.Router.js
│   │   ├── coupon.Router.js
│   │   ├── payments.Router.js
│   │   ├── product.Router.js
│   │   └── register.js
│   │
│   ├── package.json
│   └── server.js
│
└── frondtend/
    │
    ├── public/
    │
    ├── src/
    │   ├── API/
    │   ├── components/
    │   ├── page/
    │   ├── stores/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
