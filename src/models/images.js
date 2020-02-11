const dbConnection = require("../database/db_connection")
const getAllImages = (category,cb) => {
    dbConnection.query("SELECT * FROM images",(err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    });
  };

  const getCategoryImages = (category,cb) => {
    dbConnection.query("SELECT * FROM images WHERE img_category = ($1)",[category] ,(err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    });
  };

  const postLiked = (img_id, user_id, cb) => {
    dbConnection.query(
      "insert into liked_pic(img_id,user_id) values ($1,$2)",
      [img_id, user_id],
      (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
      }
    );
  };
  
  module.exports = {
    getAllImages,
    getCategoryImages,
    postLiked
  }