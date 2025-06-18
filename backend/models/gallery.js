const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  
  image: {
    public_id: String,
    url: String
  },
  category:{
    type:String,
    enum:["Institute","Departments","Initiatives","T & P Cell","Student Affairs","Library","Facilities","Alumni","Media Coverage"],
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('gallery', gallerySchema);