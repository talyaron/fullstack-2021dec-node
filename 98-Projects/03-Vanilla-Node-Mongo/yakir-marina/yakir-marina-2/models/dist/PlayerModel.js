"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var PlayerSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    score: {
        type: String,
        requierd: false
    },
    wins: {
        type: Number,
        required: false
    },
    played: {
        type: Number,
        required: false
    },
    entrances: {
        type: Number,
        "default": 0
    }
}, {
    timestamps: true
});
var PlayerModel = mongoose_1["default"].model("players", PlayerSchema);
exports["default"] = PlayerModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
