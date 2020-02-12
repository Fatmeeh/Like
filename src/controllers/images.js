const dataModel = require('../models');

const getAnimals = (req, res) => {
  dataModel.images.getCategoryImages('Animals', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Animals', data: data,id:1 });
  });
};

const getFlowers = (req, res) => {
  dataModel.images.getCategoryImages('flowers', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Flowers', data: data ,id:1});
  });
};

const getCars = (req, res) => {
  dataModel.images.getCategoryImages('Cars', (err, data) => {
    if (err) console.log(err);
    res.render('home', { title: 'LIKE | Cars', data: data,id:1 });
  });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};
