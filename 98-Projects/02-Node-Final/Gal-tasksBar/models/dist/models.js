"use strict";
exports.__esModule = true;
;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    userName: String,
    password: String,
    email: String
});
var User = mongoose_1.model("user", UserSchema);
exports["default"] = User;
User.find({ userName: "galgross24@gmail.com" }).then(function (docs) { return console.log(docs); })["catch"](function (err) { return console.log(err.message); });
var crypto = require('crypto');
var hashPassword = function (plainText) {
    return crypto.createHmac('gal1', 'key')
        .update(plainText)
        .digest('hex');
};
hashPassword;
