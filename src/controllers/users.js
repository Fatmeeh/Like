const dataModel = require("../models");

const getUserProfilePage = (req, res) => {
    dataModel.users.getUserByName('francis',(err,data)=>{
      if (err) console.log(err);
      res.render('userProfile', { title: 'LIKE | Animals', userData: data });
    });
  };
module.exports = { getUserProfilePage };
