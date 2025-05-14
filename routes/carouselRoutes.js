const express = require('express');
const router = express.Router();
const multer = require('multer');
const carouselController = require('../controllers/carouselController');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

router.post('/carouselCardImages', upload.single('image'), carouselController.createCarouselCard);
router.get('/carouselCardImages', carouselController.getCarouselCards);

module.exports = router;