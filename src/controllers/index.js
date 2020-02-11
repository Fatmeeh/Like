const express = require('express');
const router = express.Router();

const images = require('./images.js');
const views = require('./views.js');

router.get('/', views.getLandingPage);
router.get('/login', views.getLoginPage);
router.get('/home', views.getHomePage);
router.get('/animals', images.getAnimals);
router.get('/flowers', images.getFlowers);
router.get('/cars', images.getCars);

module.exports = router;
