require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("colors");

const app = express();

// Environment configuration
const isProduction = process.env.NODE_ENV === "production";
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

// CORS Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB with enhanced error handling
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log(
      `Successfully connected to MongoDB (${process.env.NODE_ENV})`
        .brightMagenta.bold.italic
    );
    console.log(`MongoDB URI:`.blue + ` ${mongoURI}`.brightMagenta.bold.italic);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB".red, err);
    process.exit(1);
  });

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Enhanced Authentication middleware
app.use((req, res, next) => {
  if (req.path.includes("/api/auth/admin-login")) {
    console.log("Admin login attempt detected".yellow);
    console.log("Request body:", JSON.stringify(req.body, null, 2).cyan);

    // Validate request body
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({
        success: false,
        message: "Missing username or password",
        code: "AUTH_400",
      });
    }

    // Compare credentials
    const isValidUsername =
      req.body.username.trim() === process.env.ADMIN_USERNAME.trim();
    const isValidPassword =
      req.body.password.trim() === process.env.ADMIN_PASSWORD.trim();

    console.log("Credentials Check:".cyan);
    console.log("Username provided:", req.body.username.green);
    console.log("Username stored:", process.env.ADMIN_USERNAME.green);
    console.log("Username match:", isValidUsername);
    console.log("Password match:", isValidPassword);

    if (!isValidUsername || !isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
        code: "AUTH_401",
      });
    }

    // If we reach here, authentication is successful
    const token = jwt.sign(
      { username: req.body.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      token,
      code: "AUTH_200",
    });
  }
  next();
});

// Enhanced Gallery Upload middleware
app.use((req, res, next) => {
  if (req.path.includes("/api/gallery/upload")) {
    console.log("Gallery upload attempt detected".yellow);
    console.log("Request body:", JSON.stringify(req.body, null, 2).cyan);
    console.log(
      "Files:",
      req.files ? Object.keys(req.files).length : 0,
      "files received".green
    );

    // Validate request body and files
    if (!req.body || !req.files) {
      return res.status(400).json({
        success: false,
        message: "Missing image data or files",
      });
    }

    // Log upload details
    console.log("Upload details:".cyan);
    console.log("Content type:", req.get("Content-Type").green);
    console.log(
      "File size:",
      req.get("Content-Length")
        ? `${(req.get("Content-Length") / 1024 / 1024).toFixed(2)} MB`.green
        : "Unknown size".yellow
    );
  }
  next();
});

// Routes
app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));

// Enhanced Error Handling
app.use((err, req, res, next) => {
  console.error("Error occurred:".red, err);

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      success: false,
      error: "Invalid credentials",
      message: "Please check your username and password",
      code: "AUTH_001",
    });
  }

  if (err.name === "MulterError") {
    return res.status(400).json({
      success: false,
      error: "File upload error",
      message: err.message,
      code: "UPLOAD_001",
    });
  }

  next(err);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`.green));
