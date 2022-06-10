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
exports.getUser = exports.updateUser = exports.getAllUsers = exports.handleAddUser = exports.handleDeleteUser = void 0;
var helpers_1 = require("../helpers");
var users = [{ name: 'Mario', userId: 'abc' }, { name: 'Rayu', userId: 'abcd' }];
exports.handleDeleteUser = function (req, res) {
    try {
        var userId_1 = req.body.userId;
        var index = users.findIndex(function (user) { return user.userId === userId_1; });
        if (index === -1)
            throw new Error('user not found');
        users = users.filter(function (user) { return user.userId !== userId_1; });
        console.log('users', users);
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleAddUser = function (req, res) {
    try {
        var username = req.body.username;
        // console.log(req.body);
        if (!username)
            throw new Error('name is required');
        var user = { name: "" + username, userId: helpers_1["default"]() };
        users.push(user);
        res.send(users);
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ users: users });
            }
            catch (error) {
                console.log('Users array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllUsers = getAllUsers;
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId_2, newName_1;
    return __generator(this, function (_b) {
        try {
            _a = req.body, userId_2 = _a.userId, newName_1 = _a.newName;
            if (!newName_1)
                throw new Error('name is required');
            users.forEach(function (user) {
                console.log(typeof user.userId);
                if (user.userId === String(userId_2)) {
                    user.name = newName_1;
                }
            });
            res.send(users);
        }
        catch (error) {
            console.error(error);
            res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
function getUser(req, res) {
    try {
        var userId_3 = req.body.userId;
        if (!userId_3)
            throw new Error('userId is missing');
        var user = users.find(function (user) { return user.userId === userId_3; });
        if (!user)
            throw new Error('couldnt find user');
        res.send({ user: user });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.getUser = getUser;
