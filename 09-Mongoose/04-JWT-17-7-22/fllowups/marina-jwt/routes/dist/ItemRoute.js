"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var jwt_simple_1 = require("jwt-simple");
var ItemController_1 = require("../controllers/ItemController");
function isUser(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error("no cookie on path");
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        req.user = decodedCookie;
        // const { role } = decodedCookie;
        // if (role !== "admin") {
        //   res.status(403).send({ error: "Not authorized" });
        // } else {
        //   next();
        // }
        next();
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
router
    .get("/get-item", isUser, ItemController_1.getItems)
    .post("/add", isUser, ItemController_1.addItem);
exports["default"] = router;
