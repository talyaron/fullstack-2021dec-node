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
exports.login = exports.register = exports.editUser = exports.getUser = void 0;
var userModel_1 = require("../model/userModel");
var userModel_2 = require("../model/userModel");
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.body.userId;
                    if (!userId)
                        throw new Error("Couldn't get userId from query");
                    return [4 /*yield*/, userModel_1["default"].findById(userId)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        throw new Error("Couldn't find user with the id: " + userId);
                    // const user = 450;
                    res.send({ user: user });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUser = getUser;
function editUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, username, job, address, profilePic, userId, user, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, email = _a.email, username = _a.username, job = _a.job, address = _a.address, profilePic = _a.profilePic, userId = _a.userId;
                    if (!userId)
                        throw new Error("Couldn't get userId from query");
                    return [4 /*yield*/, userModel_1["default"].findById(userId)];
                case 1:
                    user = _b.sent();
                    user.email = email;
                    user.username = username;
                    user.job = job;
                    user.address = address;
                    user.profilePic = profilePic;
                    user.ifFirstLogin = false;
                    return [4 /*yield*/, user.save()];
                case 2:
                    user = _b.sent();
                    res.send(user);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.send({ eror: error_2.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.editUser = editUser;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, error, username, job, address, profilepic, ifFirstLogin, user, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("trying to register");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    console.log(email, password);
                    error = userModel_2.UserValidation.validate({ email: email, password: password }).error;
                    if (error) {
                        console.debug(error);
                        throw error;
                    }
                    username = "Please Enter Username";
                    job = "Where do you work?";
                    address = "Where do you live?";
                    profilepic = "enter a url picture";
                    ifFirstLogin = true;
                    user = new userModel_1["default"]({ email: email, password: password, username: username, job: job, address: address, profilepic: profilepic, ifFirstLogin: ifFirstLogin });
                    return [4 /*yield*/, user.save()];
                case 2:
                    _b.sent();
                    res.send({ register: true, user: user });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, error, user, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    console.debug({ email: email, password: password });
                    error = userModel_2.UserValidation.validate({ email: email, password: password }).error;
                    if (error)
                        throw error;
                    return [4 /*yield*/, userModel_1["default"].findOne({ email: email, password: password })];
                case 1:
                    user = _b.sent();
                    console.debug("user:" + user);
                    if (!user) {
                        res.send({ login: false });
                    }
                    else {
                        console.debug("sending to client");
                        res.send({ login: true, user: user });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
