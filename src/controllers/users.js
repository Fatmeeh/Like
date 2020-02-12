const dataModel = require('../models');

const getUserProfilePage = (req, res) => {
  dataModel.users.getUserById(1, (err, data) => {
    if (err) console.log(err);
    res.render('userProfile', { title: 'LIKE | Users', userData: data });
  });
};
const checkUser = (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.user_pass;
  dataModel.users.getUserByNamePass(userName, password, (err, data) => {
    if (err) {
      res.redirect('/login');
    }
    if (data.length) {
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  });
};
module.exports = {
  getUserProfilePage,
  checkUser
};
