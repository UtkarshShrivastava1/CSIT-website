const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middleware/auth');
const { singleUploadMiddleware, multipleUploadMiddleware } = require('../middleware/upload');
const {
  getAllImages,
  getImageById,
  uploadImage,
  uploadMultipleImages,
  deleteImage
} = require('../controllers/galleryController');

// Public routes
router.get('/', getAllImages);
router.get('/:id', getImageById);

// Admin routes - Single image upload
router.post(
  '/',
  protect,
  isAdmin,
  singleUploadMiddleware,
  uploadImage
);

// Admin routes - Multiple image upload
router.post(
  '/multiple',
  protect,
  isAdmin,
  multipleUploadMiddleware,
  uploadMultipleImages
);

router.delete('/:id', protect, isAdmin, deleteImage);

module.exports = router;