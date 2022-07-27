"use strict";
exports.__esModule = true;
exports.getUserData = void 0;
var express_1 = require("express");
var router = express_1["default"].Router();
var jwt_simple_1 = require("jwt-simple");
// import {isUser} from '../middleware/helpers';
// isUser check to authrized user for login
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
var PlayerController_1 = require("../controllers/PlayerController");
// router
//   .post("/register", register)
//   .post("/login", login)
//   .get("/player-by-cookie", getPlayerByCookie);
// export default router;
router
    .post("/register", PlayerController_1.register)
    .post("/login", PlayerController_1.login)
    .get("/player-by-cookie", getUserData, PlayerController_1.getPlayerByCookie);
exports["default"] = router;
