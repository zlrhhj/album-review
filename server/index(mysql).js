require("dotenv").config();
const Express = require("express");
const db = require("../db/index.js");

const path = require("path");

const app = Express();
app.use(Express.static(path.join(__dirname, "../client/dist")));
app.use(Express.json());

app.get("/reviews", (req, res) => {
  const query = "SELECT * FROM reviews";
  db.query(query, (err,results)=> {
    if(err) {
      res.send(err)
    } else {
      res.status(201).send(results);
    }
  })
});

app.post("/reviews", (req, res) => {
  const query = "INSERT INTO reviews (name, comment, rating) VALUES(?, ?, ?)";
  const params = [req.body.name, req.body.comment, req.body.rating];

  db.query(query, params,(err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.status(201).send();
    }
  });
})

app.patch("/reviews", (req, res) => {

  const query =  'UPDATE reviews SET comment=?, rating=? where name=?';
  const params = [req.body.comment, req.body.rating, req.body.name];
  db.query(query,params,(err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.status(201).send();
    }
  })
});

app.delete("/reviews",(req, res) => {
  console.log(req.body);
  console.log("req.query =", req.query);
  const query = "DELETE FROM reviews where name = ?";
  const params = [req.query.name];
  db.query(query,params,(err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.status(201).send();
    }
  })

});

app.listen(process.env.PORT, ()=>{
  console.log(`App is listening on port ${process.env.PORT}`);
})