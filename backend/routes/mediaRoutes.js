const express = require("express");
const router = express.Router();
const multer = require("multer");
const { authMiddleware } = require("../middleware/auth"); 
const { 
  createMediaArticle, 
  getAllMediaArticles, 
  deleteMediaArticle,
  updateMediaArticle,
  toggleMediaStatus 
} = require("../controllers/mediaController");


const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB limit
    files: 1
  }
});

// --- Public Target Feed Access ---
router.get("/", getAllMediaArticles);

// --- Admin Operation Handles (Protected) ---
router.use(authMiddleware);

// upload.single("image") expects frontend key name to be 'image'
router.post("/", upload.single("image"), createMediaArticle); 
router.delete("/:id", deleteMediaArticle);
router.put("/:id", upload.single("image"), updateMediaArticle);
router.patch("/:id/status", toggleMediaStatus); 
module.exports = router;