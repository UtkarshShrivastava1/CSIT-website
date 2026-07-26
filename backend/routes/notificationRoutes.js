const express = require("express");
const router = express.Router();
const {  createNotification,
  getAllNotifications,
  getNotificationsByCategory,
  getNotificationById,
  updateNotification,
  deleteNotification,
  toggleStatus, } = require("../controllers/notificationController");

router.get("/", getAllNotifications);
router.get("/category/:category", getNotificationsByCategory);
router.get("/:id", getNotificationById);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);
router.patch("/:id/status", toggleStatus);

module.exports = router;