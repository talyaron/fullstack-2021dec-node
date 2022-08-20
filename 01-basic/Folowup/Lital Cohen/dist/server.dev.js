"use strict";

var express = require('express');

var app = express();
var port = 4000;
app.use(express["static"]("public"));

function multi(a, b) {
  return Math.sqrt(a * b);
}

app.get("/client.html", function (req, res) {
  res.send("Hi Lital");
});
app.get("/name.html", function (req, res) {
  res.send("Welcome back you are the Admin");
});
app.get("/multi", function (req, res) {
  res.send("<h1>".concat(multi(6, 7)));
});
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});