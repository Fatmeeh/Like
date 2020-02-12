const getHomePage = (req, res) => {
  res.render("home", { title: "LIKE | HOME", data: "Hello HOME PAGE" });
};

const getLandingPage = (req, res) => {
  res.render("landing", {
    title: "Welcome To LIKE",
    data: "Hello Landing Page"
  });
};

const getLoginPage = (req, res) => {
  res.render("login", { title: "LIKE | LogIn", data: "Hello Login" });
};

module.exports = { getHomePage, getLandingPage, getLoginPage };
