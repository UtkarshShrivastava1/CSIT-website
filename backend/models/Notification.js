const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    category: {
      type: String,
      enum: ["announcement", "tender", "notice", "event"],
      required: [true, "Category is required"],
    },
    message: {
      type: String,
      required: [true, "Message content is required"],
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    lastDate: {
      type: Date,
    },
    link: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: String, 
      default: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);