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
exports.updateScoreByID = exports.updateLostByID = exports.getPlayerByCookie = exports.login = exports.register = void 0;
var PlayerModel_1 = require("../models/PlayerModel");
var jwt_simple_1 = require("jwt-simple");
var bcrypt_1 = require("bcrypt");
var saltRounds = 10;
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, error, salt, hash, score, lost, played, playerDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                error = PlayerModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                salt = bcrypt_1["default"].genSaltSync(saltRounds);
                hash = bcrypt_1["default"].hashSync(password, salt);
                score = void 0;
                lost = void 0;
                played = void 0;
                playerDB = new PlayerModel_1["default"]({ name: name, email: email, password: hash, score: score, lost: lost, played: played });
                return [4 /*yield*/, playerDB.save()];
            case 1:
                _b.sent();
                res.status(200).send({ success: true, player: playerDB });
                console.log("playerDB is:", playerDB);
                console.log("hash is:", hash);
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
    var _a, email, password, error, playerDB, entrances, name, score, lost, cookie, secret, JWTCookie, isMatchPassword, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                error = PlayerModel_1.UserValidation.validate({ email: email, password: password }).error;
                if (error)
                    throw error;
                return [4 /*yield*/, PlayerModel_1["default"].findOne({ email: email })];
            case 1:
                playerDB = _b.sent();
                entrances = playerDB.entrances;
                if (!entrances)
                    entrances = 0;
                entrances++;
                console.log("entrances:", entrances);
                name = playerDB.name;
                score = playerDB.score;
                lost = playerDB.lost;
                return [4 /*yield*/, playerDB.updateOne({ entrances: entrances })];
            case 2:
                _b.sent();
                cookie = { playerId: playerDB._id, name: name, score: score, lost: lost };
                secret = process.env.JWT_SECRET;
                JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                if (!playerDB) {
                    res.send({ login: false });
                }
                else {
                    isMatchPassword = bcrypt_1["default"].compare(password, playerDB.password);
                    if (!isMatchPassword)
                        throw new Error("username or password is not matched");
                    res.cookie("player1", JWTCookie, { maxAge: 1000 * 60 * 60 * 24 });
                    res.cookie("player2", JWTCookie, { maxAge: 1000 * 60 * 60 * 24 });
                    res.send({ success: true, player: playerDB, entrances: entrances });
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
exports.getPlayerByCookie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var player1, player2;
    return __generator(this, function (_a) {
        try {
            player1 = req.player1;
            player2 = req.player2;
            console.log("player1 is:", player1);
            console.log("player2 is:", player2);
            if (!player1)
                throw new Error("Cookie player not found");
            if (!player2)
                throw new Error("Cookie player not found");
            res.send({ success: true, player1: player1, player2: player2 });
            console.log("player1 is:", player1);
            console.log("player2 is:", player2);
        }
        catch (error) {
            console.error(error.message);
            res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.updateLostByID = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lost, _id, playerDB, name, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                lost = req.body.lost;
                _id = req.body._id;
                return [4 /*yield*/, PlayerModel_1["default"].findOne({ _id: _id })];
            case 1:
                playerDB = _a.sent();
                name = playerDB.name;
                PlayerModel_1["default"].findOneAndUpdate({ _id: _id }, { lost: lost }, function (error, data) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(data);
                    }
                });
                res.send({ success: true, player: playerDB, name: name });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateScoreByID = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var score, _id, playerDB, name, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                score = req.body.score;
                _id = req.body._id;
                return [4 /*yield*/, PlayerModel_1["default"].findOne({ _id: _id })];
            case 1:
                playerDB = _a.sent();
                name = playerDB.name;
                PlayerModel_1["default"].findOneAndUpdate({ _id: _id }, { score: score }, function (error, data) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(data);
                    }
                });
                res.send({ success: true, player: playerDB, name: name });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4.message);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
