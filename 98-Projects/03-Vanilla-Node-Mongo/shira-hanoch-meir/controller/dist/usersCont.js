"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.coachLogin = exports.login = exports.register = void 0;
var model_1 = require("../model/model");
var jwt_simple_1 = require("jwt-simple");
var bcrypt_1 = require("bcrypt");
var saltRounds = 10;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, salt, hash, userDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    salt = bcrypt_1["default"].genSaltSync(saltRounds);
                    hash = bcrypt_1["default"].hashSync(password, salt);
                    return [4 /*yield*/, model_1.regModel.create({ email: email, password: hash })];
                case 1:
                    userDB = _b.sent();
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userDB, isMatch, role, cookie, secret, JWTCookie, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, model_1.regModel.findOne({ email: email })];
                case 1:
                    userDB = _b.sent();
                    if (!userDB)
                        throw new Error("User name or password do not match");
                    if (!userDB.password)
                        throw new Error('No password in DB');
                    return [4 /*yield*/, bcrypt_1["default"].compare(password, userDB.password)];
                case 2:
                    isMatch = _b.sent();
                    if (!isMatch)
                        throw new Error('Username or password do not match');
                    role = userDB.role;
                    cookie = { userId: userDB._id, role: role };
                    secret = process.env.JWT_SECRET;
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    res.cookie('user', JWTCookie);
                    res.send({ ok: true });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function coachLogin(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, findCoach, role, cookie, secret, JWTCookie, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, model_1.coachModel.findOne({ email: email, password: password })];
                case 1:
                    findCoach = _b.sent();
                    if (!findCoach)
                        throw new Error("User name or password do not match");
                    role = findCoach.role;
                    cookie = (findCoach._id, role);
                    secret = process.env.JWT_SECRET;
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    res.cookie('coach', JWTCookie);
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.coachLogin = coachLogin;
//Backup login function before add becrypt:
// export async function login(req:any, res:any){
//     try {
//         const {email, password} = req.body;
//         const findUser:any = await regModel.findOne({email, password});
//         if (!findUser) throw new Error("User name or password do not match");
//         const role = findUser.role
//         const cookie = (findUser._id, role);
//         const secret = process.env.JWT_SECRET;
//         const JWTCookie = jwt.encode(cookie, secret);
//         res.cookie('user', JWTCookie)
//         res.send({ok:true})
//     } catch (error:any) {
//         res.send({error: error.message})
//     }
// }
