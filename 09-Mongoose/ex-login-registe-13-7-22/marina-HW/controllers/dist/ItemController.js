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
exports.yearRange = exports.addItem = exports.getProduct = void 0;
var ItemModel_1 = require("../models/ItemModel");
var picture1 = new ItemModel_1["default"]({
    title: "A Girl",
    year: "1980",
    url: "https://images.saatchiart.com/saatchi/419093/art/4053254/3123107-HSC00001-7.jpg  ",
    ownerId: "userId"
});
var picture2 = new ItemModel_1["default"]({
    title: "Someone",
    year: "1980",
    url: "https://5cc7c3ootfh3s6ncj47bjfv5-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/NightsceneRK-768x1024.jpg",
    ownerId: "userId"
});
// const picture3 = new ItemModel({
//   title: "An Old Man",
//   year: "1981",
//   url: "https://i.pinimg.com/736x/b2/b2/29/b2b229ae5330ef68e4e71095153dfa1a.jpg",
//   ownerId: "userId",
// });
// const picture4 = new ItemModel({
//   title: "She",
//   year: "1982",
//   url: "https://robertkelleyart.com/wp-content/uploads/2020/04/rkelleyart3.jpg",
//   ownerId: "userId",
// });
// const picture5 = new ItemModel({
//   title: "Woman Portret",
//   year: "1983",
//   url: "https://images.squarespace-cdn.com/content/v1/5ef2738a424c785ccc2cc849/1594233455714-11ASZI9SDK35PF5ZPCNY/image-asset.jpeg",
//   ownerId: "userId",
// });
// picture1.save();
// picture2.save();
// picture3.save();
// picture4.save();
// picture5.save();
console.log(picture1);
console.log(picture2);
// console.log(picture3);
// console.log(picture4);
// console.log(picture5);
exports.getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userId, itemDB, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                if (!user)
                    throw new Error("The user not found");
                console.log(user);
                userId = user.userId;
                return [4 /*yield*/, ItemModel_1["default"].find({ ownerId: userId })];
            case 1:
                itemDB = _a.sent();
                res.send({ success: true, user: user, item: itemDB });
                console.log(itemDB);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, year, url, user, userId, itemDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, year = _a.year, url = _a.url;
                user = req.cookies.user;
                userId = user.userId;
                itemDB = new ItemModel_1["default"]({ title: title, year: year, url: url, ownerId: userId });
                return [4 /*yield*/, itemDB.save()];
            case 1:
                _b.sent();
                if (!user)
                    throw new Error("The user not found");
                console.log(user);
                res.send({ success: true, item: itemDB });
                console.log(itemDB);
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
exports.yearRange = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var year, year1980, year1981, year1982, year1983, yearDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                year = req.query.year;
                if (!year) return [3 /*break*/, 6];
                console.log(year);
                return [4 /*yield*/, ItemModel_1["default"].find({ year: 1980 })];
            case 1:
                year1980 = _a.sent();
                return [4 /*yield*/, ItemModel_1["default"].find({ year: 1981 })];
            case 2:
                year1981 = _a.sent();
                return [4 /*yield*/, ItemModel_1["default"].find({ year: 1982 })];
            case 3:
                year1982 = _a.sent();
                return [4 /*yield*/, ItemModel_1["default"].find({ year: 1983 })];
            case 4:
                year1983 = _a.sent();
                return [4 /*yield*/, ItemModel_1["default"].find({ year: { $gte: 1981 } })];
            case 5:
                yearDB = _a.sent();
                res.send({ year1980: year1980, year1981: year1981, year1982: year1982, year1983: year1983, yearDB: yearDB });
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_3 = _a.sent();
                console.error(error_3);
                res.send({ error: error_3.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
// export const updateItem = async (req, res) => {
//   try {
//     const updatedItem = await ItemModel.findOneAndUpdate({title: 'test@test'}, {year: 1982}, {$set: {title: 'test@test-2'}});
//     res.send({ updatedItem });
//     console.log(updatedItem);
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.message });
//   }
// }
