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
exports.someFunction = exports.getUserByCookie = exports.login = exports.deleteUser = exports.updateUser = exports.addUser = exports.getAllUsers = void 0;
var usersModel_1 = require("../model/usersModel");
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, usersModel_1["default"].find({})];
                case 1:
                    users = _a.sent();
                    res.send({ ok: true, users: users });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1.error);
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllUsers = getAllUsers;
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, newUser, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password;
                newUser = new usersModel_1["default"]({ username: username, password: password });
                return [4 /*yield*/, newUser.save()];
            case 1:
                result = _b.sent();
                res.send({ result: result });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, role, users, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, userId = _a.userId, role = _a.role;
                if (!(userId && role)) return [3 /*break*/, 2];
                return [4 /*yield*/, usersModel_1["default"].updateOne({ _id: userId }, { role: role })];
            case 1:
                users = _b.sent();
                res.send({ ok: true, users: users });
                return [3 /*break*/, 3];
            case 2: throw new Error("userId or role is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.log(error_3.error);
                res.send({ error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, users, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userId = req.body.userId;
                console.log(userId);
                if (!userId) return [3 /*break*/, 2];
                return [4 /*yield*/, usersModel_1["default"].deleteOne({ _id: userId })];
            case 1:
                users = _a.sent();
                res.send({ ok: true, users: users });
                return [3 /*break*/, 3];
            case 2: throw new Error("userId or role is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                console.log(error_4.error);
                res.send({ error: error_4.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, usersModel_1["default"].findOne({ username: username, password: password })];
            case 1:
                user = _b.sent();
                if (user) {
                    res.cookie('user', user._id);
                    res.send({ ok: true, user: user });
                }
                else {
                    throw new Error("user not found");
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                console.log(error_5.error);
                res.send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserByCookie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userDB, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                console.log('user', user);
                if (!user) {
                    throw new Error("user not found");
                }
                return [4 /*yield*/, usersModel_1["default"].findById(user)];
            case 1:
                userDB = _a.sent();
                console.log('userDB', userDB);
                if (!userDB)
                    throw new Error("user not found in DB");
                res.send({ ok: true, user: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.log(error_6.error);
                res.send({ error: error_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.someFunction = function (y) { return y * 2; };
