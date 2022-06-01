"use strict";
//import User from "../Model/usersModel"
exports.__esModule = true;
exports.getUsers = void 0;
var users = [
    { userName: "Guy", userId: uid() },
    { userName: "Rivka", userId: uid() },
];
exports.getUsers = function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
}
;
