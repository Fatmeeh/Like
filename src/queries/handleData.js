const dbConnection = require("../database/db_connections.js");
const getUsers = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

const getImages = (category,cb) => {
  dbConnection.query("SELECT * FROM users WHERE img_category = ($1)",[category] ,(err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};



const postData = (item_name, item_price, price_currency, cb) => {
  dbConnection.query(
    "insert into shop(item_name,item_price,price_currency) values ($1,$2,$3)",
    [item_name, item_price, price_currency],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};


module.exports = {
  getUsers,
  getImages,
  postData,
};
