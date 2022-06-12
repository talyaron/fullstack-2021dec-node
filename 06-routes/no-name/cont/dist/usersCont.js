"use strict";
exports.__esModule = true;
exports.handleAddUser = exports.handleDeleteUser = exports.initUsers = void 0;
var helpers_1 = require("../helpers");
var users = [
    { name: "Mario", userId: helpers_1["default"]() },
    { name: "Rayu", userId: helpers_1["default"]() },
];
exports.initUsers = function (req, res) {
    try {
        res.send(users);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleDeleteUser = function (req, res) {
    try {
        var userID_1 = req.body.userID;
        var index = users.findIndex(function (user) { return user.userId === userID_1; });
        if (index === -1)
            throw new Error("user not found");
        users = users.filter(function (user) { return user.userId !== userID_1; });
        res.send(users);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleAddUser = function (req, res) {
    var name = req.body.name;
    console.log(req.body);
    if (!name)
        throw new Error("name is required");
    var user = { name: name, userId: helpers_1["default"]() };
    users.push(user);
    res.send(users);
};
