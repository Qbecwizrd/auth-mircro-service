

// Load environment variables
const dotenv = require('dotenv');
dotenv.config();


// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



//db config

const connectDB = require('./config/db');

// Connect DB
connectDB();



// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({
  origin: 'http://localhost:3000', // your React app's URL
  credentials: true
}));
       // Enable CORS

// Import Routes
const authRoutes = require('./routes/auth'); // You'll create this soon

// Routes Middleware
app.use('/auth', authRoutes);

// Home route (optional)
app.get('/', (req, res) => {
  res.send('Auth Service is Running 🚀');
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    
    // Start server only after DB connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
