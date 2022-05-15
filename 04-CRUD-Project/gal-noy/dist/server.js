var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
