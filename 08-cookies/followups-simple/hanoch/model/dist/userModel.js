"use strict";
exports.__esModule = true;
exports.userValidation = exports.userModel1 = void 0;
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
    }
});
var userSchema1 = new mongoose_1["default"].Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var userModel = mongoose_1["default"].model('user123', userSchema);
exports.userModel1 = mongoose_1["default"].model('user1234', userSchema1);
exports["default"] = userModel;
exports.userValidation = joi_1["default"].object({
    email: joi_1["default"].string().required().email(),
    password: joi_1["default"].string().required()
});
