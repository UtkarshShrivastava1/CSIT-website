const { cloudinary } = require("../config/cloudinary");

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

// Upload multiple images
const uploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images provided",
      });
    }

    console.log(`Attempting to upload ${req.files.length} images...`.yellow);

    const uploadPromises = req.files.map(async (file) => {
      try {
        // Convert buffer to base64
        const base64 = `data:${file.mimetype};base64,${file.buffer.toString(
          "base64"
        )}`;
        return await uploadWithRetry(base64, {
          folder: "gallery",
          resource_type: "auto",
        });
      } catch (error) {
        console.error("Error uploading file:".red, error);
        throw error;
      }
    });

    const results = await Promise.all(uploadPromises);
    console.log(`Successfully uploaded ${results.length} images`.green);

    res.status(201).json({
      success: true,
      images: results,
      message: `Successfully uploaded ${results.length} images`,
    });
  } catch (error) {
    console.error("Error uploading images:".red, error);
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
  uploadImages,
  deleteImage,
};
