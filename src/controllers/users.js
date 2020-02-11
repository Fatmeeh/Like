const dataModel = require("../models");

const getUserProfilePage = (req, res) => {
  res.render("userProfile", {
    title: "LIKE | Profile",
    data: "Hello HOME PAGE"
  });
};

module.exports = { getUserProfilePage };
