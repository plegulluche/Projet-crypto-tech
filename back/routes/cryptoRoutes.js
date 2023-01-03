const express = require('express');
const homePageController = require('../controllers/homePageController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);

router
  .route('/')
  .get(homePageController.getCryptoRates) 
  .put(homePageController.updateFav)
  /*
  .get(homePageController.getCryptoRates)
  .get(homePageController.getGlobalStats) */

router
  .route('/dashboard')
  .get(homePageController.getCryptoRates)
  .patch(homePageController.updateFav);/* 
  .get(homePageController.getCryptoInfo)
  .get(homePageController.getGlobalStats) */

  router
  .route('/:id')
  .get(homePageController.getCryptoRates)
  .patch(homePageController.updateFav);


module.exports = router;
