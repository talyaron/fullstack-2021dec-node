"use strict";
exports.__esModule = true;
exports.lessonsModel = exports.cartModel = exports.coachModel = exports.regModel = void 0;
var mongoose_1 = require("mongoose");
var regSchema = new mongoose_1["default"].Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
var coachSchema = new mongoose_1["default"].Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
var lessonsSchema = new mongoose_1["default"].Schema({
    lesson: String,
    date: Date,
    price: Number,
    coach: String
});
var cartSchema = new mongoose_1["default"].Schema({
    lesson: String,
    date: Date,
    price: Number,
    user: String
});
exports.regModel = mongoose_1["default"].model('users', regSchema);
exports.coachModel = mongoose_1["default"].model('coachers', coachSchema);
exports.cartModel = mongoose_1["default"].model('cart', cartSchema);
exports.lessonsModel = mongoose_1["default"].model('lessons', lessonsSchema);
