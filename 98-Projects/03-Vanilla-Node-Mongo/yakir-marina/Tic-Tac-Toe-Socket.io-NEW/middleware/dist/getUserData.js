"use strict";
exports.__esModule = true;
exports.getUserData = void 0;
var jwt_simple_1 = require("jwt-simple");
function getUserData(req, res, next) {
    try {
        var _a = req.cookies, player1 = _a.player1, player2 = _a.player2;
        if (!player1)
            throw new Error("user cookie not found");
        if (!player2)
            throw new Error("user cookie not found");
        var secret1 = process.env.JWT_SECRET;
        var decodedCookie1 = jwt_simple_1["default"].decode(player1, secret1);
        var secret2 = process.env.JWT_SECRET;
        var decodedCookie2 = jwt_simple_1["default"].decode(player2, secret2);
        console.log("decodedCookie1 is:", decodedCookie1);
        console.log("decodedCookie2 is:", decodedCookie2);
        req.player1 = decodedCookie1;
        req.player2 = decodedCookie2;
        console.log("req.player1 is:", req.player1);
        console.log("req.player2 is:", req.player2);
        next();
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.getUserData = getUserData;
