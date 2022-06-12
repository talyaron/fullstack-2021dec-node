"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CoursesShema = new mongoose_1["default"].Schema({
    title: String,
    price: Number,
    img: String
});
//create a collection
var Course = mongoose_1["default"].model("courses", CoursesShema);
exports["default"] = Course;
