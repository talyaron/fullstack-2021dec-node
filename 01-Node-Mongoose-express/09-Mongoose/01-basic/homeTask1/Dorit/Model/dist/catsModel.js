"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CatSchema = new mongoose_1["default"].Schema({
    name: String,
    age: Number,
    color: String,
    src: String
});
var CatModel = mongoose_1["default"].model("cats", CatSchema);
exports["default"] = CatModel;
