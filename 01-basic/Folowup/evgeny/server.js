var express = require("express");
var app = express();
const port = 4000;


app.use(express.static('public'))