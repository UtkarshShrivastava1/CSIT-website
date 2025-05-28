const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  
  image: {
    public_id: String,
    url: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('gallery', gallerySchema);