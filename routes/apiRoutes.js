const axios = require("axios");
const router = require("express").Router();
const db = require("../client/models");

router.get("/searchBooks", (req, res) => {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        req.query.q +
        "&printType=books"
    )
    .then(results => {
      res.json(results.data);
    })
    .catch(err => {
      res.status(422).send(err);
    });
});

router.get("/getBooks", (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => res.sendStatus(500));
});

router.post("/saveBook", (req, res) => {
  db.Book.create(req.body.data)
    .then(function(dbBook) {
      // View the added result in the console
      console.log(dbBook);
      res.sendStatus(200).end();
    })
    .catch(function(err) {
      // If an error occurred, log it
      console.log(err);
      res.sendStatus(500).end();
    });
});

module.exports = router;
