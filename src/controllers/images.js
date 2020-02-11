const dataModel = require('../models');

const getAnimalsData = dataModel.images.getCategoryImages(
  'Animals',
  console.log
);
const getCarsData = dataModel.images.getCategoryImages('Cars', console.log);
const getFlowersData = dataModel.images.getCategoryImages(
  'Flowers',
  console.log
);

const getAnimals = (req, res) => {
  res.render("home", { title: "LIKE | Flowers", data: "Hello Animals" });
};

const getFlowers = (req, res) => {
  res.render("home", { title: "LIKE | Flowers", data: "Hello Flowers" });
};

const getCars = (req, res) => {
  res.render("home", { title: "LIKE | Flowers", data: "Hello Cars" });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};
