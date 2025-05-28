const Gallery = require('../models/gallery');
const cloudinary = require('../config/cloudinary');

// Helper function to handle Cloudinary uploads
const uploadToCloudinary = async (file) => {
  try {
    const fileStr = file.buffer.toString('base64');
    const uploadResponse = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${fileStr}`,
      {
        resource_type: 'auto',
        folder: 'gallery_images',
        quality: 'auto:good',
        fetch_format: 'auto'
      }
    );
    return {
      public_id: uploadResponse.public_id,
      url: uploadResponse.secure_url
    };
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw new Error('Failed to process image upload');
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort('-createdAt').lean();
    res.status(200).json({
      success: true,
      count: images.length,
      data: images
    });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching gallery images'
    });
  }
};

const getImageById = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }
    res.status(200).json({
      success: true,
      data: image
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching image'
    });
  }
};

const uploadImage = async (req, res) => {
  try {
    // Validation
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Image file is required'
      });
    }

    // Process image upload
    let imageData = null;
    try {
      imageData = await uploadToCloudinary(req.file);
    } catch (uploadError) {
      return res.status(500).json({
        success: false,
        message: uploadError.message
      });
    }

    // Create gallery entry
    const newImage = await Gallery.create({
      image: imageData
    });

    res.status(201).json({
      success: true,
      data: {
        id: newImage._id,
        image: newImage.image,
        createdAt: newImage.createdAt
      }
    });

  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'Server error uploading image'
    });
  }
};

const uploadMultipleImages = async (req, res) => {
  try {
    // Validation
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one image file is required'
      });
    }

    const uploadResults = [];
    const failedUploads = [];

    // Process each file upload in parallel
    const uploadPromises = req.files.map(async (file) => {
      try {
        const imageData = await uploadToCloudinary(file);
        const newImage = await Gallery.create({
          image: imageData
        });
        
        uploadResults.push({
          id: newImage._id,
          image: newImage.image,
          createdAt: newImage.createdAt
        });
      } catch (err) {
        console.error(`Error uploading file: ${file.originalname}`, err);
        failedUploads.push({
          fileName: file.originalname,
          error: err.message
        });
      }
    });

    // Wait for all uploads to complete
    await Promise.all(uploadPromises);

    // Return response with results
    res.status(201).json({
      success: true,
      uploadedCount: uploadResults.length,
      failedCount: failedUploads.length,
      data: uploadResults,
      failedUploads: failedUploads.length > 0 ? failedUploads : undefined
    });

  } catch (error) {
    console.error('Error uploading multiple images:', error);
    res.status(500).json({
      success: false,
      message: 'Server error uploading images'
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    // Delete image from Cloudinary
    if (image.image?.public_id) {
      try {
        await cloudinary.uploader.destroy(image.image.public_id);
      } catch (deleteError) {
        console.error('Error deleting image from Cloudinary:', deleteError);
        // Continue with database record deletion even if Cloudinary deletion fails
      }
    }

    await image.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting image'
    });
  }
};

module.exports = {
  getAllImages,
  getImageById,
  uploadImage,
  uploadMultipleImages,
  deleteImage
};