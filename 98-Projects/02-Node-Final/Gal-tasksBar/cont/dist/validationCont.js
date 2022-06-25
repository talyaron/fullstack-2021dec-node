"use strict";
exports.__esModule = true;
exports.validateLoginForm = exports.validateSignupForm = exports.usersValidated = void 0;
exports.usersValidated = [];
exports.validateSignupForm = function (req, res) {
    var _a = req.body, userName = _a.userName, email = _a.email, password = _a.password;
    if (!userName || !email || !password)
        throw new Error("Details are required!");
    var newUser = {
        userName: userName, email: email, password: password,
        "in": false
    };
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
