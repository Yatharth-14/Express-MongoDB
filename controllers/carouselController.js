const carouselService = require('../services/carouselService');
const path = require('path');

const createCarouselCard = async (req, res) => {
  try {
    let imgURL = req.body.imgURL;

    // If an image file is uploaded, use its path instead of imgURL
    if (req.file) {
      imgURL = `/uploads/${req.file.filename}`;
    }

    if (!imgURL) {
      throw new Error('Either imgURL or an image file is required');
    }

    const result = await carouselService.createCarouselCard({
      title: req.body.title,
      imgURL,
      desc: req.body.desc,
      couponCode: req.body.couponCode,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message || 'Server error' });
  }
};

const getCarouselCards = async (req, res) => {
  try {
    const carouselCards = await carouselService.getAllCarouselCards();
    res.json(carouselCards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createCarouselCard,
  getCarouselCards,
};