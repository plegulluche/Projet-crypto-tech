const express = require('express');
const homePageController = require('../controllers/homePageController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);

router
  .route('/')
  .get(homePageController.getCryptoRates)/* 
  .get(homePageController.getCryptoRates)
  .get(homePageController.getGlobalStats) */

router
  .route('/dashboard')
  .get(homePageController.getCryptoRates)/* 
  .get(homePageController.getCryptoInfo)
  .get(homePageController.getGlobalStats) */

module.exports = router;
