const express = require('express');

const userListFromDatabase = require('./../model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'LIKE | Home' });
});

router.get('/cars', (req, res) => {
  res.render('home', { title: 'LIKE | Cars', data: 'This is cars' });
});

router.get('/flowers', (req, res) => {
  res.render('home', { title: 'LIKE | Flowers', data: 'This is flowers' });
});

router.get('/animals', (req, res) => {
  res.render('home', { title: 'LIKE | Animals', data: 'This is animals' });
});

module.exports = router;
