"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        "enum": ["user", "admin"],
        "default": "user"
    }
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
