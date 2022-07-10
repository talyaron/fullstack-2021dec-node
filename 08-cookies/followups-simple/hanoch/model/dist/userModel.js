"use strict";
exports.__esModule = true;
exports.userValidation = exports.userModelEnter = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var userSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var userSchemaEnter = new mongoose_1["default"].Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: Number
    }
});
var userModel = mongoose_1["default"].model('user123', userSchema);
exports.userModelEnter = mongoose_1["default"].model('userEnter', userSchemaEnter);
exports["default"] = userModel;
exports.userValidation = joi_1["default"].object({
    email: joi_1["default"].string().required().email(),
    password: joi_1["default"].string().required()
});
