"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
function isAdmin(req, res, next) {
    try {
        //check if admin
        //decode the cookie, and if it has  role "admin"
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        var decodedCookie = jwt.decode(user, secret);
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
exports.isAdmin = isAdmin;
