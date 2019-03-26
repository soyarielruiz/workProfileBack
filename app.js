var express = require("express");
const MongoClient = require('mongodb').MongoClient
//var bodyParser = require("body-parser");
var app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

// Connection URL
const mongoUrl = process.env.MONGO_URL //|| 'mongodb://db:27017/test';

app.get("/", function(req, res) {
  res.status(200).send("Hello JS Arg Off-Topic!");
});

app.get("/db", function(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
      res.status(500).send('Error connecting to MongoDB: ' + err);
    } else {
      res.status(200).send('Connected succesfully  MongoDB!');
      db.close();
    }
  });
});

var port = "8080";

app.listen(port, function() {
  console.log("Listening on port: " + port);
});
