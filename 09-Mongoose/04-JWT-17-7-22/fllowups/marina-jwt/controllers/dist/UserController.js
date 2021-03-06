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
exports.getUserByCookie = exports.login = exports.register = void 0;
var UserModel_1 = require("../models/UserModel");
var jwt_simple_1 = require("jwt-simple");
var bcrypt_1 = require("bcrypt");
var saltRounds = 10;
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, error, salt, hash, userDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                error = UserModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                salt = bcrypt_1["default"].genSaltSync(saltRounds);
                hash = bcrypt_1["default"].hashSync(password, salt);
                userDB = new UserModel_1["default"]({ name: name, email: email, password: hash });
                // const userDB = new UserModel({name, email, password});
                return [4 /*yield*/, userDB.save()];
            case 1:
                // const userDB = new UserModel({name, email, password});
                _b.sent();
                res.status(200).send({ success: true, user: userDB });
                console.log('userDB is:', userDB);
                console.log('hash is:', hash);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1.message);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, error, userDB, entrances, role, name, cookie, secret, JWTCookie, isMatchPassword, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                error = UserModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                return [4 /*yield*/, UserModel_1["default"].findOne({ email: email })];
            case 1:
                userDB = _b.sent();
                entrances = userDB.entrances;
                if (!entrances)
                    entrances = 0;
                entrances++;
                console.log(entrances);
                return [4 /*yield*/, userDB.updateOne({ entrances: entrances })];
            case 2:
                _b.sent();
                role = userDB.role || 'user';
                console.log(role);
                name = userDB.name;
                cookie = { userId: userDB._id, role: role, name: name };
                secret = process.env.JWT_SECRET;
                JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                if (!userDB) {
                    res.send({ login: false });
                }
                else {
                    isMatchPassword = bcrypt_1["default"].compare(password, userDB.password);
                    if (!isMatchPassword)
                        throw new Error('Username or password is not matched');
                    res.cookie('user', JWTCookie, { maxAge: 1000 * 60 * 60 * 24 });
                    res.send({ success: true, user: userDB, entrances: entrances });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2.message);
                res.send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUserByCookie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, secret, decodedCookie;
    return __generator(this, function (_a) {
        try {
            user = req.cookies.user;
            console.log("user is:", user);
            if (!user)
                throw new Error('Cookie user not found');
            secret = process.env.JWT_SECRET;
            decodedCookie = jwt_simple_1["default"].decode(user, secret);
            console.log(decodedCookie);
            res.send({ success: true, user: user, decodedCookie: decodedCookie });
            console.log("user is:", user);
        }
        catch (error) {
            console.error(error.message);
            res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
