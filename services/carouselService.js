const CarouselCardImage = require('../models/CarouselCardImage');

const createCarouselCard = async ({ title, imgURL, desc, couponCode }) => {
  const carouselCard = new CarouselCardImage({
    title,
    imgURL,
    desc,
    couponCode,
  });

  await carouselCard.save();
  return { message: 'Carousel card created successfully', carouselCard };
};

const getAllCarouselCards = async () => {
  return await CarouselCardImage.find().select('-carouselId'); // Ensure carouselId is not included
};

module.exports = {
  createCarouselCard,
  getAllCarouselCards,
};