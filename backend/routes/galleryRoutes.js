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
    fileSize: 5 * 1024 * 1024,
    files: 10,
  },
});

// Public route - no auth required
router.get("/", getAllImages);

// Protected routes - require auth
router.use(authMiddleware);
router.post("/multiple", upload.array("images"), uploadImages);
router.delete("/:id", deleteImage);

module.exports = router;
