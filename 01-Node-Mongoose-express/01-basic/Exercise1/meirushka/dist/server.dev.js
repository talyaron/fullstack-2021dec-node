"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4100;
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});