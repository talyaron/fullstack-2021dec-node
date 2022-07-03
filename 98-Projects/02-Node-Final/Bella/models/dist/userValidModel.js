"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
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
var UserValidModel = mongoose_1["default"].model('valid-users', UserValidSchema);
exports["default"] = UserValidModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
