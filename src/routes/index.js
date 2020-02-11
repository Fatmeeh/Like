const express = require('express');

const userListFromDatabase = require('./../model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/cars', (req, res) => {
  res.render('home', { data: 'This is cars' });
});

router.get('/flowers', (req, res) => {
  res.render('home', { data: 'This is flowers' });
});

router.get('/animals', (req, res) => {
  res.render('home', { data: 'This is animals' });
});

module.exports = router;
