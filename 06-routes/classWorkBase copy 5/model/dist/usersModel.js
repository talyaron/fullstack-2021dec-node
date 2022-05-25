"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    username: String,
    password: String,
    role: String,
    phone: String
});
//create a collection
var User = mongoose_1["default"].model("users", UserSchema);
exports["default"] = User;
