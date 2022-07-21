"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var jwt_simple_1 = require("jwt-simple");
var UserController_1 = require("../controllers/UserController");
function isUser(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error("user cookie not found");
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(' is:decodedCookie is:', decodedCookie);
        // const { role } = decodedCookie;
        // if(role !== 'admin') {
        //     res.status(403).send({error: 'Not authorized'});
        // } else {
        //     next();
        // }
        next();
    }
    catch (error) {
        res.send({ error: error });
    }
}
router
    .post("/register", UserController_1.register)
    .post("/login", UserController_1.login)
    .get("/user-by-cookie", isUser, UserController_1.getUserByCookie);
exports["default"] = router;
