const express = require('express');
const homePageController = require('../controllers/homePageController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);

router
  .route('/')
  .get(homePageController.getCryptoRates) 

router
  .route('/history')
  .get(homePageController.getHistoric)


  router
  .route('/:id')
  .get(homePageController.getCryptoRates)
  .patch(homePageController.updateFav);


module.exports = router;
