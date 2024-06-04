
require('dotenv').config()
const Express = require("express");
const path = require("path");

const app = Express();

const db = require("../db/index.js");
app.use(Express.static(path.join(__dirname,"../client/dist")));
app.use(Express.json());

app.post("/reviews", (req, res) => {

  const query = "insert into reviews (name, comment, rating) VALUES (?, ?, ?)";

  const params = [req.body.name, req.body.comment, req.body.rating];

  db.queryAsync(query, params)
  .then((result) => {
    res.status(201).send();
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get("/reviews",(req, res) => {

  const query = "select * from reviews;";
  db.queryAsync(query)
  .then((results) => {
    res.status(201).send(results[0]);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.delete("/reviews", (req, res) => {
  const query = "DELETE FROM reviews where name = ?";
  const params = [req.query.name];

  db.queryAsync(query, params)
  .then((results) => {
    res.status(201).send(results[0]);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.patch("/reviews", (req, res) => {

  console.log("req.body",req.body);
  const params = [req.body.comment, req.body.rating, req.body.name];
  const query = "UPDATE reviews SET comment = ?, rating = ? where name = ?";
  db.queryAsync(query, params)
  .then((response) => {
    res.status(201).send();
  })
  .catch((err) => {
    res.send(err);
  })
})



app.listen(process.env.PORT,()=>{
  console.log(`App is listening on port ${process.env.PORT}`)
});