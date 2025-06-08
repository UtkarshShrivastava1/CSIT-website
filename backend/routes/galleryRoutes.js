const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  uploadImages,
  getAllImages,
  deleteImage,
} = require("../controllers/galleryController");
const { authMiddleware } = require("../middleware/auth");

// Configure multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 10, // Max 10 files at once
  },
});

// Gallery routes
router.get("/", getAllImages);
router.post("/multiple", upload.array("images"), uploadImages);
router.delete("/:id", deleteImage);

module.exports = router;
