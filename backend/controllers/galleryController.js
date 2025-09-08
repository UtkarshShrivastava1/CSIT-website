const { cloudinary, uploadWithRetry } = require("../config/cloudinary");
const gallery = require("../models/gallery");

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

    const response = await gallery.find({ category });

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

      // Save to MongoDB
      await gallery.create({
        image: {
          public_id: uploaded.public_id,
          url: uploaded.secure_url,
        },
        category,
      });

      return uploaded;
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

// Delete image
// Delete image (fixed)
const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    // Find gallery doc in DB
    const doc = await Gallery.findById(id);
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // Make sure we have a public_id saved when uploading (recommended)
    const publicId =
      doc.image &&
      (doc.image.public_id || doc.image.publicId || doc.image.publicId);
    // Fallback: if url saved but no public_id, attempt to parse public_id from URL (optional)
    // const derivedPublicId = parsePublicIdFromUrl(doc.image.url);

    if (publicId) {
      // Destroy from Cloudinary
      const destroyResult = await cloudinary.uploader.destroy(publicId, {
        resource_type: "image", // or 'auto' depending on upload
      });

      // Optionally check destroyResult.result === 'ok' or 'not found'
      // console.log('destroyResult', destroyResult);
    } else {
      console.warn(
        "No public_id found for image, skipping Cloudinary destroy for id:",
        id
      );
    }

    // Remove document from MongoDB
    await Gallery.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting image",
      error: error.message,
    });
  }
};

module.exports = {
  getAllImages,
  uploadImages,
  deleteImage,
  getImageByCategory,
};
