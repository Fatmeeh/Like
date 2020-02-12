const dataModel = require('../models');

const getAnimals = (req, res) => {
  dataModel.images.getCategoryImages('Animals', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Animals', data: data });
  });
};

const getFlowers = (req, res) => {
  dataModel.images.getCategoryImages('flowers', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Flowers', data: data });
  });
};

const getCars = (req, res) => {
  dataModel.images.getCategoryImages('Cars', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Cars', data: data });
  });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};
