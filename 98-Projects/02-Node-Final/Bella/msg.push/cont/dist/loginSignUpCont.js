"use strict";
exports.__esModule = true;
exports.validateLoginForm = exports.validateSignupForm = exports.usersValidated = void 0;
var helpers_1 = require("../helpers");
exports.usersValidated = [];
exports.validateSignupForm = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    if (!name || !email || !password)
        throw new Error("Details are required!");
    var newUser = {
        name: name, email: email, password: password,
        userID: helpers_1["default"](), "in": false
    };
    // newUser.in = true;
    exports.usersValidated.push(newUser);
    res.send({ usersValidated: exports.usersValidated });
    console.log(exports.usersValidated);
    console.log(newUser);
};
exports.validateLoginForm = function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password;
    if (!name || !password)
        throw new Error("Details are required!");
    res.send({ usersValidated: exports.usersValidated });
    console.log(exports.usersValidated);
};
