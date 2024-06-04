const mysql = require("mysql2");

const connection = mysql.createConnection({
  host:"localhost",
  user: process.env.DB_User,
  password: process.env.DB_PW,
  database: process.env.DB_Name
})

connection.connect();

connection.query("CREATE TABLE IF NOT EXISTS reviews \
( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
  name varchar(20) NOT NULL,\
  comment varchar(250) NOT NULL,\
  rating int NOT NULL)");

module.exports = connection;