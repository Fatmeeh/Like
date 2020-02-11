const getAnimals = (req, res) => {
  res.render('home', { title: 'LIKE | Flowers', data: 'Hello Animals' });
};

const getFlowers = (req, res) => {
  res.render('home', { title: 'LIKE | Flowers', data: 'Hello Flowers' });
};

const getCars = (req, res) => {
  res.render('home', { title: 'LIKE | Flowers', data: 'Hello Cars' });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};
