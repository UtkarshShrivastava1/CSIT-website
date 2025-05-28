const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/admin-login", (req, res) => {
  const { username, password } = req.body;

  // Debug logging
  console.log("Login attempt:", {
    providedUsername: username,
    providedPassword: password,
    envUsername: process.env.ADMIN_USERNAME,
    envPassword: process.env.ADMIN_PASSWORD,
  });

  // Trim whitespace and compare exactly
  if (
    username.trim() === process.env.ADMIN_USERNAME.trim() &&
    password.trim() === process.env.ADMIN_PASSWORD.trim()
  ) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.json({
      success: true,
      token,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

module.exports = router;
