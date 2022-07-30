"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = void 0;
const jwt_simple_1 = __importDefault(require("jwt-simple"));
// import bcrypt from "bcrypt";
function isUser(req, res, next) {
    try {
        const { user } = req.cookies;
        if (!user)
            throw new Error("user cookie not found");
        const secret = process.env.JWT_SECRET;
        let decodedCookie = jwt_simple_1.default.decode(user, secret);
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
