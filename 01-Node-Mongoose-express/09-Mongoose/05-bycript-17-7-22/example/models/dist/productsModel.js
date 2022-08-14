"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1["default"].Schema({
    title: { type: String, required: true },
    ownerId: { type: String, required: true }
});
var ProductModel = mongoose_1["default"].model("products", ProductSchema);
exports["default"] = ProductModel;
