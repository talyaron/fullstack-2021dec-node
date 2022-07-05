"use strict";
exports.__esModule = true;
exports.UserValidation = exports.UserModel = exports.UserValidModel = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserValidSchema = new mongoose_1["default"].Schema({
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
var UserSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    }
});
exports.UserValidModel = mongoose_1["default"].model('valid-users', UserValidSchema);
exports.UserModel = mongoose_1["default"].model('users', UserSchema);
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
