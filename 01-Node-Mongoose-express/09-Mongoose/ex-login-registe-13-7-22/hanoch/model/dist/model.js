"use strict";
exports.__esModule = true;
exports.regModel = exports.productModel = void 0;
var mongoose_1 = require("mongoose");
var regSchema = new mongoose_1["default"].Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
var productSchema = new mongoose_1["default"].Schema({
    product: { type: String, required: true },
    price: { type: Number, required: true },
    user: String
});
exports.productModel = mongoose_1["default"].model("products", productSchema);
exports.regModel = mongoose_1["default"].model('users', regSchema);
