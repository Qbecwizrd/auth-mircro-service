# auth-mircro-service
Auth Service Prerequisites
1. Environment Setup
Node.js installed (preferably latest LTS)

npm or yarn package manager

A code editor (VS Code recommended)

MongoDB instance running (local or MongoDB Atlas)

2. Packages / Libraries you’ll need
express — web framework for Node.js

mongoose — ODM for MongoDB (to define schemas and interact with DB)

bcryptjs or bcrypt — for hashing passwords securely

jsonwebtoken — to create and verify JWT tokens

dotenv — to manage environment variables

cors — to handle Cross-Origin Resource Sharing (for React frontend to talk to backend)

express-validator — (optional) for validating request input (email format, password length, etc.)

3. Folder structure (basic idea)
pgsql
Copy
Edit
auth-service/
│
├── controllers/        # Business logic: register, login
├── models/             # User schema
├── routes/             # API routes: /auth/register, /auth/login
├── middleware/         # Middleware: auth check, error handling
├── config/             # DB connection, environment config
├── .env                # Environment variables (DB URI, JWT secret)
├── server.js           # Express app setup and server start
└── package.json
4. Environment variables you will need
MONGO_URI — your MongoDB connection string

JWT_SECRET — secret key for signing JWT tokens

PORT — port number (e.g., 5000)

5. Basic flow to implement
User sends POST /auth/register with { name, email, password }

Validate input

Check if user exists

Hash password

Save user in DB

Return success or error

User sends POST /auth/login with { email, password }

Validate input

Find user by email

Compare hashed password

Create JWT token with user info

Return token or error



--------------------------------------------------------------------------------------------------------------------

