const cloudinary = require("../config/cloudinary");
const { Readable } = require("stream");

// Get all images
const getAllImages = async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "gallery/", // your folder name on Cloudinary
      max_results: 100,
    });

    const images = result.resources.map((img) => ({
      public_id: img.public_id,
      url: img.secure_url,
      width: img.width,
      height: img.height,
      format: img.format,
      created_at: img.created_at,
    }));

    res.status(200).json({ success: true, images });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Upload image
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "gallery",
      resource_type: "auto",
    });

    res.status(201).json({
      success: true,
      image: result,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
};

// Upload multiple images
const uploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images provided",
      });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "gallery",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        // Convert buffer to stream
        const bufferStream = new Readable();
        bufferStream.push(file.buffer);
        bufferStream.push(null);
        bufferStream.pipe(stream);
      });
    });

    const results = await Promise.all(uploadPromises);

    res.status(201).json({
      success: true,
      images: results,
      message: `Successfully uploaded ${results.length} images`,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({
      success: false,
      message: "Error uploading images",
      error: error.message,
    });
  }
};

// Delete image
const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    await cloudinary.uploader.destroy(id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting image",
      error: error.message,
    });
  }
};

module.exports = {
  getAllImages,
  uploadImage,
  uploadImages,
  deleteImage,
};
