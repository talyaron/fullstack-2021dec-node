"use strict";

var express = require('express');

var PORT = 5050;
var app = express();

var mongoose = require('mongoose');

app.use(express["static"]('public'));
app.use(express.json());

try {
  mongoose.connect('mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/IDLesson', function () {
    console.log("db connected");
  });
} catch (error) {
  console.log(error);
}

var indexRout = require('./routes');

app.use('/', indexRout);
app.listen(PORT, function () {
  console.log("http://localhost:".concat(PORT));
});