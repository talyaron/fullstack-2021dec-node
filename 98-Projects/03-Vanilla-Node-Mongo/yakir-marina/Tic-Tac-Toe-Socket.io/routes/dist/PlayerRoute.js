"use strict";
exports.__esModule = true;
exports.isUser = void 0;
var express_1 = require("express");
var router = express_1["default"].Router();
var jwt_simple_1 = require("jwt-simple");
// import {isUser} from '../middleware/helpers';
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
var PlayerController_1 = require("../controllers/PlayerController");
// router
//   .post("/register", register)
//   .post("/login", login)
//   .get("/player-by-cookie", getPlayerByCookie);
// export default router;
router
    .post("/register", isUser, PlayerController_1.register)
    .post("/login", isUser, PlayerController_1.login)
    .get("/player-by-cookie", isUser, PlayerController_1.getPlayerByCookie);
exports["default"] = router;
