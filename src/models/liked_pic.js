const dbConnection = require("../database/db_connection")
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
    postLiked
  }