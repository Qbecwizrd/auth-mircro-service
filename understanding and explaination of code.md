

# 📘 Auth Microservice Documentation – MERN Stack 🔐

This document helps you understand the **architecture**, **dependencies**, and **functionality** of the **Auth Microservice** built using the **MERN stack** (MongoDB, Express, React, Node.js).

---

## ⚙️ Purpose

> This codebase is a foundational **Authentication Microservice** that provides API endpoints for **user registration** and **login**, along with JWT-based authentication.

---

## 📦 Tech Stack & Dependencies

### ✅ Core Dependencies in `req.txt`:

| 📦 Package | 🌟 Purpose                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `express`  | Web framework for Node.js – handles server and routing logic.                                                    |
| `mongoose` | ODM (Object Data Modeling) tool for MongoDB – helps structure and interact with the database easily.             |
| `cors`     | Enables **Cross-Origin Resource Sharing**, allowing your frontend (React app) and backend to communicate safely. |

---

## 🗂️ Folder Structure Overview

```bash
auth-service/
│
├── controllers/      📂 Business logic (register/login)
├── models/           📂 Mongoose schema for Users
├── routes/           📂 API endpoints (/auth/register, /auth/login)
├── middleware/       📂 Auth & error-handling middleware
├── config/           📂 DB connection logic
├── .env              🌍 Environment variables (DB URI, JWT Secret)
├── server.js         🚀 Main entry point - sets up Express server
└── package.json      📋 Project metadata & scripts
```

---

## 📁 Folder-wise Breakdown

### 1️⃣ `controllers/` – 🧠 **Business Logic**

* Contains the two main functions:

  * `registerUser` ➡️ Handles user signup logic and saves the user to MongoDB.
  * `loginUser` ➡️ Authenticates the user and returns a JWT token.

📌 Think of this as the **brain** of the application that deals with **actual logic** after the request reaches the route.

---

### 2️⃣ `models/` – 🏗️ **User Schema**

* Contains `user.js`:

  * Defines the **structure** of user data stored in MongoDB.
  * Uses Mongoose Schema to declare fields like `name`, `email`, `password`, etc.

📌 This acts as the **blueprint** for the database entries.

---

### 3️⃣ `config/` – 🛠️ **Configuration Utilities**

* Contains `db.js`:

  * Responsible for **connecting to MongoDB** using Mongoose.
  * Uses `MONGO_URI` from `.env` to establish the connection.

📌 Separates config logic from main server logic — **cleaner architecture**.

---

### 4️⃣ `routes/` – 🛤️ **API Routes**

* Defines endpoints like:

  * `POST /auth/register`
  * `POST /auth/login`

* Uses Express Router to direct traffic and invoke controller functions.

📌 This is where all **client requests** are received and forwarded to logic.

---

### 5️⃣ `middleware/` – 🔒 **JWT & Error Handling**

* Contains:

  * Middleware to **verify JWT tokens**
  * Possibly other reusable middlewares (e.g., error formatting, logger)

📌 Acts like a **security checkpoint** and keeps route logic clean.

---

## 🔐 `.env` – Environment Variables

Stores **sensitive data** like:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb
JWT_SECRET=myultrasecretkey
PORT=5000
```

🛡️ Keeps secrets **out of the code** and makes it easy to change config per environment.

---

## 🚀 `server.js` – Starting Point

This is the main file that:

1. Loads environment variables
2. Connects to MongoDB
3. Sets up Express app and middleware
4. Registers routes (`/auth/register`, etc.)
5. Starts the server on the given port

---

## 🧠 Summary Diagram

```plaintext
 Client (React App)
        ↓
   /auth/register → [routes] → [controllers/registerUser] → [models/User] → MongoDB
   /auth/login    → [routes] → [controllers/loginUser]    → JWT → Client
                            ↑
                       [middleware/auth.js]
```

---

## ✅ Final Thoughts

This microservice is modular, secure, and follows **clean architecture** principles:

* Separation of concerns ✅
* Middleware usage ✅
* Environment configs ✅
* JWT-based authentication ✅


