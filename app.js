var express = require("express");
var app = express();

// var MongoClient= require('mongodb').MongoClient
// var mongoUrl = process.env.MONGO_URL ||  'mongodb://db:27017/test';

app.get("/", function(req, res) {
  res.status(200).send("Hello JS Arg Off-Topic!");
  // MongoClient.connect(mongoUrl,function (err,db){
  //   if (err){
  //     res.writeHead(500,)
  //   }
  // })
});

var port = "8080";

app.listen(port, function() {
  console.log("Listening on port: " + port);
});
