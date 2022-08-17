"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: String,
    job: String,
    address: String,
    profilePic: String,
    ifFirstLogin: Boolean
});
var UserModel = mongoose_1["default"].model('users', UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required().min(6).max(12),
    username: joi_1["default"].string(),
    job: joi_1["default"].string(),
    address: joi_1["default"].string(),
    profilePic: joi_1["default"].string(),
    ifFirstLogin: joi_1["default"].boolean()
});
