require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001
const Review = require("../db/index.js");

app.use(express.static(path.join(__dirname,'../client/dist')));
app.use(express.json());

app.post("/reviews", (req, res) => {

  const review = new Review(req.body);
  review.save()
  .then((response) => {
    res.status(201).send();
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get('/reviews', (req, res) => {

  Review.find({})
  .then((results) => {
    res.status(201).send(results);
  })
  .catch((err) => {
    res.send(err);
  })
})

app.delete('/reviews', (req, res) => {

  Review.findOneAndDelete({name: req.query.name})
  .then((response) => {
    res.status(201).send(response);
  })
  .catch((err) => {
    res.send(err);
  })
})

app.patch('/reviews', (req, res) => {
  console.log(req);
  Review.findOneAndUpdate({name: req.body.name}, {comment: req.body.comment, rating:req.body.rating})
  .then((response) => {
    res.status(201).send(response);
  })
  .catch((err) => {
    res.send(err);
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})