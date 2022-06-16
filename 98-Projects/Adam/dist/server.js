"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var items_1 = require("./routes/items");
app.use("/items", items_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
