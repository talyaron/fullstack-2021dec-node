"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var userSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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
    img: {
        type: String,
        required: true
    }
});
var userModel = mongoose_1["default"].model('users', userSchema);
exports["default"] = userModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    name: joi_1["default"].string().required(),
    password: joi_1["default"].string().required(),
    age: joi_1["default"].number().required(),
    img: joi_1["default"].string().required()
});
