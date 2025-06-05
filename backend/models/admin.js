const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Create model
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

// Compare with env credentials directly
const compareWithEnvCredentials = (username, password) => {
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
};

// Generate token using env credentials
const generateAuthToken = (username) => {
  return jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "24h",
  });
};

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  if (req.path.includes("/api/auth/admin-login")) {
    try {
      const { username, password } = req.body;
      console.log("Login attempt for username:".yellow, username);

      // Compare with environment variables
      const isValid = compareWithEnvCredentials(username, password);

      if (!isValid) {
        console.log("Invalid credentials".red);
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
          code: "AUTH_401",
        });
      }

      // Generate token on successful login
      const token = generateAuthToken(username);

      console.log("Login successful".green);
      return res.status(200).json({
        success: true,
        token,
        message: "Login successful",
        code: "AUTH_200",
      });
    } catch (error) {
      console.error("Login error:".red, error);
      return res.status(500).json({
        success: false,
        message: "Authentication failed",
        code: "AUTH_500",
      });
    }
  }
  next();
};

module.exports = {
  Admin,
  authMiddleware,
};
