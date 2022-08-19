"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: true
    },
    url: String,
    year: {
        type: Number
    },
    ownerId: {
        type: String,
        required: true
    }
});
var ItemModel = mongoose_1["default"].model("items", ItemSchema);
exports["default"] = ItemModel;
