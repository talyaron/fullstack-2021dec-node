"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1.Schema({
    userName: String,
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
var UserModel = mongoose_1.model("user", UserSchema);
exports["default"] = UserModel;
// User.find({userName:"galgross24@gmail.com"}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
