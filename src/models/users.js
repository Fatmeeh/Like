const dbConnection = require("../database/db_connection")
const getAllUsers = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const getUserByName = (userName,cb) => {
    dbConnection.query("SELECT * FROM users WHERE user_name = ($1) ",[userName], (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    });
  };
 module.exports = {
    getAllUsers,
    getUserByName
 }