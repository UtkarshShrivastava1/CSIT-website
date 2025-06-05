// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
      code: "AUTH_NO_TOKEN",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin privileges required",
        code: "AUTH_FORBIDDEN",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      code: "AUTH_INVALID_TOKEN",
    });
  }
};
