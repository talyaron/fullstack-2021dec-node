"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
mongoose_1["default"]
    .connect("mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority")
    .then(function () {
    console.log("Connected to DB!");
})["catch"](function (err) { return console.log(err); });
app.use(express_1["default"].static('public'));
var usersRoute_1 = require("./routes/usersRoute");
app.use('/users', usersRoute_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
