"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CatSchema = new mongoose_1["default"].Schema({
    catName: String,
    age: Number,
    imgUrl: String
});
var CatModel = mongoose_1["default"].model("cats", CatSchema);
exports["default"] = CatModel;
