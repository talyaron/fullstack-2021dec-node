"use strict";
exports.__esModule = true;
exports.getUserData = void 0;
var jwt_simple_1 = require("jwt-simple");
function getUserData(req, res, next) {
    try {
        var player = req.cookies.player;
        if (!player)
            throw new Error("user cookie not found");
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt_simple_1["default"].decode(player, secret);
        console.log("decodedCookie is:", decodedCookie);
        req.player = decodedCookie;
        console.log("req.player is:", req.player);
        next();
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.getUserData = getUserData;
