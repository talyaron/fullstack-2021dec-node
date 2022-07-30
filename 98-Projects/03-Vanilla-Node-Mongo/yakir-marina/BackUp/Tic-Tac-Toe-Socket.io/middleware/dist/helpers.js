"use strict";
exports.__esModule = true;
exports.isUser = void 0;
var jwt_simple_1 = require("jwt-simple");
// import bcrypt from "bcrypt";
function isUser(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error("user cookie not found");
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log("decodedCookie is:", decodedCookie);
        req.user = decodedCookie;
        console.log("req.user is:", req.user);
        next();
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.isUser = isUser;
