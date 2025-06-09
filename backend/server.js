require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const errorHandler = require("./middleware/errorHandler");
const { authMiddleware } = require("./middleware/auth");
require("colors");
const admissionRoutes = require("./routes/admissionRoutes");
const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS Setup
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    exposedHeaders: ["set-cookie"],
  })
);

// Routes
app.use("/api/admission", admissionRoutes);
// Admin Login Route
app.post("/api/auth/admin-login", (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
        code: "AUTH_400",
      });
    }

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        success: true,
        token,
        message: "Login successful",
        code: "AUTH_200",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
      code: "AUTH_401",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
      code: "AUTH_500",
    });
  }
});

// Protected routes (example)
// app.use("/api/gallery", require("./routes/galleryRoutes"));

// 404 fallback
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    code: "NOT_FOUND",
  });
});

// Global error handler
app.use(errorHandler);

// MongoDB Connection & Server Start
const PORT = process.env.PORT || 5000;
const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_ATLAS_URI
    : process.env.MONGO_LOCAL_URI;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  retryWrites: true,
  w: "majority",
};

const connectWithRetry = async (retryCount = 5) => {
  try {
    console.log("Connecting to MongoDB...".yellow);
    await mongoose.connect(mongoURI, mongooseOptions);
    console.log("MongoDB connected".green.bold);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`.green);
    });
  } catch (err) {
    console.error("MongoDB connection error:".red, err);
    if (retryCount > 0) {
      console.log(
        `Retrying MongoDB connection... (${retryCount} retries left)`.yellow
      );
      setTimeout(() => connectWithRetry(retryCount - 1), 5000);
    } else {
      console.error("MongoDB connection failed after multiple attempts".red);
      process.exit(1);
    }
  }
};

connectWithRetry();
