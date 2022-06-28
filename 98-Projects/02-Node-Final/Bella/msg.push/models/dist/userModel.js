"use strict";
exports.__esModule = true;
exports.UserVal = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserScheme = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    }
});
var UserModel = mongoose_1["default"].model('users', UserScheme);
exports["default"] = UserModel;
exports.UserVal = joi_1["default"].object({
    name: joi_1["default"].string().required()
});
