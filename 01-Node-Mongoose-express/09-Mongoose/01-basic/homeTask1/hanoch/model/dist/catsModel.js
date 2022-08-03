"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var catsSchema = new mongoose_1["default"].Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});
var catsModel = mongoose_1["default"].model('cats', catsSchema);
exports["default"] = catsModel;
