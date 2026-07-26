const Notification = require("../models/Notification");
require("colors");

// 1. Create Notification (Admin Only)
const createNotification = async (req, res) => {
  try {
    console.log("Creating new notification...".yellow);
    const { title, category, message, publishDate, lastDate, link } = req.body;

    if (!title || !category || !message) {
      return res.status(400).json({
        success: false,
        message: "Title, category, and message are required fields.",
      });
    }

    const notification = await Notification.create({
      title,
      category,
      message,
      publishDate,
      lastDate,
      link,
    });

    console.log("Notification created successfully".green);
    return res.status(201).json({
      success: true,
      message: "Notification created successfully",
      notification,
    });
  } catch (error) {
    console.error("Error creating notification:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// 2. Get All Notifications (Public - Active Only for Frontend)
const getAllNotifications = async (req, res) => {
  try {
    console.log("Fetching all notifications for registry log...".yellow);
    
    const notifications = await Notification.find({}).sort({ publishDate: -1 });

    return res.status(200).json({
      success: true,
      count: notifications.length,
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching notifications",
      error: error.message,
    });
  }
};

// 3. Get Notifications By Category (Public)
const getNotificationsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log(`Fetching notifications for category: ${category}`.yellow);

    const notifications = await Notification.find({ category, isActive: true }).sort({ publishDate: -1 });

    return res.status(200).json({
      success: true,
      count: notifications.length,
      notifications,
    });
  } catch (error) {
    console.error("Error fetching category notifications:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching category notifications",
      error: error.message,
    });
  }
};

// 4. Get Single Notification By ID (Public)
const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    return res.status(200).json({
      success: true,
      notification,
    });
  } catch (error) {
    console.error("Error fetching single notification:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching notification detail",
      error: error.message,
    });
  }
};

// 5. Update Notification (Admin Only)
const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Updating notification ID: ${id}`.yellow);

    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedNotification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found to update",
      });
    }

    console.log("Notification updated successfully".green);
    return res.status(200).json({
      success: true,
      message: "Notification updated successfully",
      notification: updatedNotification,
    });
  } catch (error) {
    console.error("Error updating notification:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error updating notification",
      error: error.message,
    });
  }
};

// 6. Delete Notification Permanently (Admin Only)
const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting notification ID: ${id}`.yellow);

    const deleted = await Notification.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    console.log("Notification deleted permanently".green);
    return res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting notification:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error deleting notification",
      error: error.message,
    });
  }
};

// 7. Toggle Active Status / Hide Notification (Admin Only)
const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    notification.isActive = !notification.isActive;
    await notification.save();

    console.log(`Notification visibility updated to: ${notification.isActive}`.green);
    return res.status(200).json({
      success: true,
      message: `Notification status set to ${notification.isActive ? "Active" : "Inactive"}`,
      isActive: notification.isActive,
    });
  } catch (error) {
    console.error("Error toggling notification status:".red, error.message);
    return res.status(500).json({
      success: false,
      message: "Error updating notification status",
      error: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationsByCategory,
  getNotificationById,
  updateNotification,
  deleteNotification,
  toggleStatus,
};