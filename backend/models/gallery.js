const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  
  image: {
    public_id: String,
    url: String
  },
  category:{
    type:String,
    enum:["Infrastructure","Departments","Initiatives","T & P Cell","Student Clubs","Facilities","R&D","Alumni","Media Coverage"],
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', gallerySchema,"gallery");