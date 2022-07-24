"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    name: { type: String, requierd: true },
    email: { type: String, requierd: true },
    password: { type: String, requierd: true },
    score: { type: String, requierd: false }
});
exports["default"] = UserSchema;
