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
exports.findCatsExpert = exports.findCats = exports.getAllCats = exports.addCat = void 0;
var CatsModel_1 = require("../model/CatsModel");
var allCats = [];
function addCat(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, color, age, imgUrl, newCat, newCatDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name = _a.name, color = _a.color, age = _a.age, imgUrl = _a.imgUrl;
                    if (!name || !color || !age || !imgUrl)
                        throw new Error("One of the inputs is missing");
                    newCat = new CatsModel_1["default"]({ name: name, age: age, color: color, imgUrl: imgUrl });
                    return [4 /*yield*/, newCat.save()];
                case 1:
                    newCatDB = _b.sent();
                    res.send({ success: true, cat: newCatDB });
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
exports.addCat = addCat;
function getAllCats(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, CatsModel_1["default"].find({})];
                case 1:
                    allCats = _a.sent();
                    res.send({ allCats: allCats });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllCats = getAllCats;
function findCats(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var age, filteredCats, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    age = req.body.age;
                    console.log(age);
                    return [4 /*yield*/, CatsModel_1["default"].find({ age: age })];
                case 1:
                    filteredCats = _a.sent();
                    if (!filteredCats)
                        throw new Error("age is missing");
                    res.send(filteredCats);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.findCats = findCats;
function findCatsExpert(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, color, age, filteredCats;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, color = _a.color, age = _a.age;
                    console.log(name);
                    return [4 /*yield*/, CatsModel_1["default"].find({ name: name, color: color, age: age }).exec()];
                case 1:
                    filteredCats = _b.sent();
                    console.log(filteredCats);
                    res.send(filteredCats);
                    return [2 /*return*/];
            }
        });
    });
}
exports.findCatsExpert = findCatsExpert;
