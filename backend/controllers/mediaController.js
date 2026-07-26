const MediaCoverage = require("../models/mediaCoverage");
const { uploadWithRetry, cloudinary } = require("../config/cloudinary");
const mongoose = require("mongoose");
require("colors");

// Create Media Article (Admin Only)
const createMediaArticle = async (req, res) => {
  try {
    console.log("Publishing new media record context...".yellow);
    const { title, category, description, date } = req.body;

    if (!title || !category || !description || !date) {
      return res.status(400).json({ success: false, message: "All textual metadata fields are required." });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Media banner image is required." });
    }

    // Parse parsing buffer stream file to Cloudinary structure
    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const uploaded = await uploadWithRetry(base64, {
      folder: "mediacoverage",
      resource_type: "auto",
    });

    const article = await MediaCoverage.create({
      title,
      category,
      description,
      date,
      image: {
        public_id: uploaded.public_id,
        url: uploaded.secure_url,
      },
    });

    console.log("Media instance synchronized successfully".green);
    return res.status(201).json({ success: true, message: "Media coverage card created successfully", article });
  } catch (error) {
    console.error("Error creating media artifact:".red, error.message);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

// Get All Media Articles (Public & Admin side logs)
// controllers/mediaController.js
const getAllMediaArticles = async (req, res) => {
  try {
    console.log("Pulling total media grid data arrays...".yellow);
    
    // ✅ Only fetch active articles for frontend
    const articles = await MediaCoverage.find({ isActive: true }).sort({ createdAt: -1 });
    // OR fetch all and let frontend filter
    // const articles = await MediaCoverage.find({}).sort({ createdAt: -1 });

    return res.status(200).json({ 
      success: true, 
      count: articles.length, 
      articles 
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Data pipeline execution error", 
      error: error.message 
    });
  }
};

// Delete Media Article (Admin Only)
const deleteMediaArticle = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Locating instance payload drop for target ID: ${id}`.yellow);

    const doc = await MediaCoverage.findById(id);
    if (!doc) {
      return res.status(404).json({ success: false, message: "Target element data context not found." });
    }

    if (doc.image?.public_id) {
      try {
        await cloudinary.uploader.destroy(doc.image.public_id, { resource_type: "auto" });
        console.log("Cloudinary asset detached safely.".green);
      } catch (cloudErr) {
        console.warn("Cloudinary asset flush exception tracked.", cloudErr.message);
      }
    }

    await MediaCoverage.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Media item purged from active database systems." });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Purge process crashed", error: error.message });
  }
};

// Missing Toggle Visibility Status Logic (Admin Only)
const toggleMediaStatus = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Toggling media coverage visibility for ID: ${id}`.yellow);

    const article = await MediaCoverage.findById(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Media article record matrix not found.",
      });
    }

    // Toggle logic
    article.isActive = !article.isActive;
    await article.save();

    console.log(`Media status successfully synchronized to: ${article.isActive}`.green);
    return res.status(200).json({
      success: true,
      message: `Media card visibility switched to ${article.isActive ? "Active" : "Hidden"}`,
      isActive: article.isActive,
    });
  } catch (error) {
    console.error("Error toggling media status:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal operational failure during status switch.",
      error: error.message,
    });
  }
};

// Update / Edit Media Article (Admin Only)
const updateMediaArticle = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Executing cluster context updates for ID: ${id}`.yellow);

    const { title, category, description, date } = req.body;

    // Check if document exists first
    let article = await MediaCoverage.findById(id);
    if (!article) {
      return res.status(404).json({ success: false, message: "Target media document node not found." });
    }

    // Prepare structural updates data object
    let updateData = { title, category, description, date };

    // Check if a new file is being pipe-dispatched via multer
    if (req.file) {
      console.log("New replacement image payload detected. Flushing old asset...".yellow);

      // 1. Purge old Cloudinary image if public_id exists
      if (article.image?.public_id) {
        try {
          await cloudinary.uploader.destroy(article.image.public_id, { resource_type: "auto" });
          console.log("Old asset successfully wiped from cloud servers.".green);
        } catch (cloudErr) {
          console.warn("Cloudinary old asset overwrite warning:", cloudErr.message);
        }
      }

      // 2. Upload new image stream
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const uploaded = await uploadWithRetry(base64, {
        folder: "mediacoverage",
        resource_type: "auto",
      });

      // Update image links in payload structure
      updateData.image = {
        public_id: uploaded.public_id,
        url: uploaded.secure_url,
      };
    }

    // Apply structured updates back into database matrices
    const updatedArticle = await MediaCoverage.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    console.log("Media entity context re-synchronized successfully.".green);
    return res.status(200).json({
      success: true,
      message: "Media dynamic dataset tracking updated successfully.",
      article: updatedArticle
    });

  } catch (error) {
    console.error("Error updating media asset:".red, error.message);
    return res.status(500).json({ success: false, message: "Internal update routine crash.", error: error.message });
  }
};

module.exports = {
  createMediaArticle,
  getAllMediaArticles,
  deleteMediaArticle,
  updateMediaArticle,
  toggleMediaStatus 
};