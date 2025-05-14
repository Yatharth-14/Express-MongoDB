const mongoose = require('mongoose');

const carouselCardImageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgURL: { type: String, required: true }, 
  desc: { type: String, required: true },
  couponCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CarouselCardImage', carouselCardImageSchema);