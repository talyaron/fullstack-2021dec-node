"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productCont_1 = require("../controls/productCont");
var jwt_simple_1 = require("jwt-simple");
var router = express_1["default"].Router();
router.get('/get-my-products', isAdmin, productCont_1.getMyProducts);
//middlware
function isAdmin(req, res, next) {
    try {
        //check if admin
        //decode the cookie, and if it has  role "admin"
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error('no secret');
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        var role = decodedCookie.role;
        if (role !== 'admin') {
            res.status(403).send({ error: 'Not authorized' });
        }
        else {
            next();
        }
        //if not return 403
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports["default"] = router;
