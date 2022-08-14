"use strict";
exports.__esModule = true;
exports.UserValidation = exports.UserModel = exports.ProfileModel = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1["default"].Schema({
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
var ProfileSchema = new mongoose_1["default"].Schema({
    name: String,
    age: Number,
    url: String
});
exports.ProfileModel = mongoose_1["default"].model("profiles", ProfileSchema);
exports.UserModel = mongoose_1["default"].model('users', UserSchema);
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
