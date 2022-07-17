"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var jwt_simple_1 = require("jwt-simple");
function isAdmin(req, res, next) {
    try {
        //check if admin decode the cookie, and if it has  role "admin"
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        var role = decodedCookie.role;
        //if not return 403
        if (role !== 'admin') {
            res
                .status(403)
                .send({ error: 'Not authorized' });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
;
