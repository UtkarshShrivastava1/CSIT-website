// controllers/galleryController.js
const { cloudinary, uploadWithRetry } = require("../config/cloudinary");
const Gallery = require("../models/gallery"); // ensure this is correct// If your model file exports differently, adapt (e.g. module.exports = mongoose.model('gallery', schema))
const mongoose = require("mongoose"); // <-- required for Types.ObjectId checks
/**
 * Fetch latest images from Cloudinary (or however you prefer)
 */
const getAllImages = async (req, res) => {
  try {
    console.log("Fetching gallery images...".yellow);

    const result = await cloudinary.search
      .expression("folder:gallery")
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    console.log(`Found ${result.resources.length} images`.green);

    return res.status(200).json({
      success: true,
      images: result.resources,
      message: "Gallery images fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching gallery images:".red, error);
    return res.status(500).json({
      success: false,
      message: "Error fetching gallery images",
      error: error.message,
    });
  }
};

const getImageByCategory = async (req, res) => {
  try {
    const { category } = req.query; // Use query instead of body

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const response = await Gallery.find({ category });

    if (response.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No images found for this category",
      });
    }

    res.status(200).json({
      success: true,
      response,
      message: `Found ${response.length} images in '${category}'`,
    });
  } catch (error) {
    console.error("Error fetching category images:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching category images",
      error: error.message,
    });
  }
};

const uploadImages = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required for all uploads",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images provided",
      });
    }

    console.log(`Uploading ${req.files.length} images to Cloudinary...`);

    const uploadPromises = req.files.map(async (file) => {
      const base64 = `data:${file.mimetype};base64,${file.buffer.toString(
        "base64"
      )}`;
      const uploaded = await uploadWithRetry(base64, {
        folder: "gallery",
        resource_type: "auto",
      });

      // Save to MongoDB (store public_id and secure_url)
      const doc = await Gallery.create({
        image: {
          public_id: uploaded.public_id,
          url: uploaded.secure_url,
        },
        category,
      });

      return {
        uploaded,
        dbDoc: doc,
      };
    });

    const uploadedImages = await Promise.all(uploadPromises);

    res.status(201).json({
      success: true,
      images: uploadedImages,
      message: `Successfully uploaded ${uploadedImages.length} images.`,
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

// Delete image (fixed)

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Missing id param" });
    }

    // If id looks like a Mongo ObjectId, try findById first
    let doc = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        doc = await Gallery.findById(id);
      } catch (dbErr) {
        console.error("Error in findById:", dbErr);
        // Continue — we'll try other lookup below
      }
    }

    // If not found by _id, try to find by image.public_id (in case client passed public_id)
    if (!doc) {
      try {
        doc = await Gallery.findOne({ "image.public_id": id });
      } catch (dbErr) {
        console.error("Error in findOne by public_id:", dbErr);
      }
    }

    // If still not found, return 404
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "Image not found (no matching DB doc)",
      });
    }

    // get public_id if available
    const publicId = doc?.image?.public_id || doc?.image?.publicId || null;

    if (publicId) {
      try {
        // Use 'auto' if you uploaded with resource_type: 'auto'
        const destroyResult = await cloudinary.uploader.destroy(publicId, {
          resource_type: "auto",
        });
        console.log(
          "Cloudinary destroy result for",
          publicId,
          "->",
          destroyResult
        );
      } catch (cloudErr) {
        // Log but don't fail the whole request; still attempt DB deletion
        console.warn(
          "Cloudinary destroy error (will continue to delete DB doc):",
          cloudErr
        );
      }
    } else {
      console.warn(
        "No public_id present on DB doc, skipping Cloudinary destroy. Doc id:",
        doc._id
      );
    }

    // Delete DB doc
    await Gallery.findByIdAndDelete(doc._id);

    return res
      .status(200)
      .json({ success: true, message: "Image deleted successfully" });
  } catch (err) {
    // Log full stack for debugging
    console.error("Unhandled error in deleteImage:", err);
    return res.status(500).json({
      success: false,
      message: "Error deleting image",
      error: err?.message || "Internal Server Error",
    });
  }
};

module.exports = {
  getAllImages,
  uploadImages,
  deleteImage,
  getImageByCategory,
};
