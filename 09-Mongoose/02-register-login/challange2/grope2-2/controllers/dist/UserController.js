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
exports.toNextPage = exports.handleUpdate = exports.handleSubmit = exports.handleLogin = exports.handleRegister = void 0;
var UserModel_1 = require("../models/UserModel");
exports.handleRegister = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, error, user, userDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                error = UserModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                user = new UserModel_1.UserModel({ email: email, password: password });
                return [4 /*yield*/, user.save()];
            case 1:
                userDB = _b.sent();
                res.status(200).send({ success: true, result: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: "Register faild" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.handleLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, error, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                error = UserModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                return [4 /*yield*/, UserModel_1.UserModel.findOne({ email: email, password: password })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.send({ login: false });
                }
                else {
                    res.status(200).send({ login: true, user: user });
                }
                console.log("Just logged in", user);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ login: false, error: "Login faild" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.handleSubmit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, age, url, userProfile, profile, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, age = _a.age, url = _a.url;
                userProfile = new UserModel_1.ProfileModel({ name: name, age: age, url: url });
                return [4 /*yield*/, userProfile.save()];
            case 1:
                profile = _b.sent();
                res.status(200).send({ succes: true, profile: profile });
                console.log(profile);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ login: false, error: "Coud`nt submit user profile" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.handleUpdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, profile, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.query.userId;
                return [4 /*yield*/, UserModel_1.ProfileModel.findByIdAndUpdate({ _id: userId }, { returnDocument: "after" })];
            case 1:
                profile = _a.sent();
                res.status(200).send({ success: true, profile: profile });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: 'Coud`nt update user profile' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.toNextPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userDB, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.query.userId;
                if (!userId)
                    throw new Error("didnt find userId");
                return [4 /*yield*/, UserModel_1.ProfileModel.findById(userId)];
            case 1:
                userDB = _a.sent();
                if (!userDB)
                    throw new Error("didn't find userDB: " + userId);
                res.status(200).send({ user: userDB, success: true });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
