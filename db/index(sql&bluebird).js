const mysql = require('mysql2');
const Promise = require("bluebird");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_User,
  password: process.env.DB_PW,
  database: process.env.DB_Name
})

const db = Promise.promisifyAll(connection,{multiArgs: true});

db.connectAsync()
.then(()=>{console.log(`Connect to MySql as id: ${db.threadId}`)})
.then(() => {
  db.queryAsync(
    "CREATE TABLE IF NOT EXISTS reviews\
    (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
    name varchar(20) NOT NULL UNIQUE,\
    comment varchar(250) NOT NULL,\
    rating INT)");
})
.catch((err) => {
  console.log(err);
})

module.exports = db;
