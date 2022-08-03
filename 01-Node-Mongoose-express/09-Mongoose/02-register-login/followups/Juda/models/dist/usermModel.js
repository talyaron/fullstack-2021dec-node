"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1["default"].Schema({
    email: String,
    password: String
});
var UserModel = mongoose_1["default"].model('user', UserSchema);
exports["default"] = UserModel;
var UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required
});
