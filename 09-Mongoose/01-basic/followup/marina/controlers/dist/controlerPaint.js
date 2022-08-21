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
exports.handleSelectTechnic = exports.handleDelete = exports.handleUpdateTitle = exports.handleAddAPainting = exports.getPaintings = void 0;
var mongoose_1 = require("mongoose");
var PaintingSchema = new mongoose_1["default"].Schema({
    artist: String,
    title: String,
    technic: String,
    year: Number,
    url: String
});
var Painting = mongoose_1["default"].model("Paintings", PaintingSchema);
var painting1 = new Painting({
    artist: "Evgeny Volobuev",
    title: "Summer In The Village",
    technic: "oil",
    year: "1980",
    url: "https://soviet-art.ru/wp-content/uploads/2018/04/Summer-in-the-village.jpg",
    gallery: [{ name: "marina", age: 26 }]
});
var painting2 = new Painting({
    artist: "Evgeny Volobuev",
    title: "Skiers",
    technic: "oil",
    year: "1984",
    url: "https://arthive.net/res/media/img/oy800/work/cd9/584567@2x.jpg"
});
var painting3 = new Painting({
    artist: "Evgeny Volobuev",
    title: "Newspaper",
    technic: "oil",
    year: "1981",
    url: "https://soviet-art.ru/wp-content/uploads/2018/04/Newspaper.-Still-life.-1962.jpg"
});
var painting4 = new Painting({
    artist: "Evgeny Volobuev",
    title: "Morning",
    technic: "oil",
    year: "1982",
    url: "https://soviet-art.ru/wp-content/uploads/2018/04/Morning-Janitors.-1957.jpg"
});
var painting5 = new Painting({
    artist: "Evgeny Volobuev",
    title: "A Dog Is Running",
    technic: "oil",
    year: "1983",
    url: "https://soviet-art.ru/wp-content/uploads/2018/04/A-dog-is-running-through-the-field-1984.jpg"
});
var painting6 = new Painting({
    artist: "Dusan Malobabic",
    title: "Rain In The Night City",
    technic: "oil",
    year: "1980",
    url: "http://4.bp.blogspot.com/-AQ8LPQm3i4M/UdboAWyQdeI/AAAAAAAAUNk/heRMYSs7IXU/s1600/crossing_in_the_rain_by_dusanmalobabic.jpg"
});
var painting7 = new Painting({
    artist: "Dusan Malobabic",
    title: "Rain In The Night Street",
    technic: "oil",
    year: "1981",
    url: "https://pbs.twimg.com/media/DSyBQL3WsAAHaZA.jpg"
});
var painting8 = new Painting({
    artist: "Dusan Malobabic",
    title: "Beach",
    technic: "oil",
    year: "1982",
    url: "https://www.picclickimg.com/d/l400/pict/253674170206_/Dusan-Malobabic-Beach-Day-Original-Oil.jpg"
});
var painting9 = new Painting({
    artist: "Dusan Malobabic",
    title: "Dock",
    technic: "oil",
    year: "1984",
    url: "https://d2jv9003bew7ag.cloudfront.net/uploads/Jacob-Dhein-San-Francisco-Piers-2015.jpg"
});
var painting10 = new Painting({
    artist: "Dusan Malobabic",
    title: "A Walk",
    technic: "oil",
    year: "1985",
    url: "https://i.pinimg.com/736x/bd/5e/7b/bd5e7b3869e6fc7f0a2645f1ef42b304--a-walk.jpg"
});
var painting11 = new Painting({
    artist: "Robert Kelley",
    title: "A Girl",
    technic: "charcoal",
    year: "1980",
    url: "https://images.saatchiart.com/saatchi/419093/art/4053254/3123107-HSC00001-7.jpg  "
});
var painting12 = new Painting({
    artist: "Robert Kelley",
    title: "Someone",
    technic: "charcoal",
    year: "1982",
    url: "https://5cc7c3ootfh3s6ncj47bjfv5-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/NightsceneRK-768x1024.jpg"
});
var painting13 = new Painting({
    artist: "Robert Kelley",
    title: "An Old Man",
    technic: "charcoal",
    year: "1983",
    url: "https://i.pinimg.com/736x/b2/b2/29/b2b229ae5330ef68e4e71095153dfa1a.jpg"
});
var painting14 = new Painting({
    artist: "Robert Kelley",
    title: "She",
    technic: "charcoal",
    year: "1984",
    url: "https://robertkelleyart.com/wp-content/uploads/2020/04/rkelleyart3.jpg"
});
var painting15 = new Painting({
    artist: "Robert Kelley",
    title: "Woman Portret",
    technic: "charcoal",
    year: "1985",
    url: "https://images.squarespace-cdn.com/content/v1/5ef2738a424c785ccc2cc849/1594233455714-11ASZI9SDK35PF5ZPCNY/image-asset.jpeg"
});
var painting16 = new Painting({
    artist: "Dusan Malobabic",
    title: "Fishing",
    technic: "oil",
    year: "1985",
    url: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/117884264_229175781870361_2786077608018186889_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=lPNlWrNYW88AX90cDgG&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT9yDuU4pBjEK-5Pk6kNJZ7OapgghMzrMQ2C7XnhE3q0LA&oe=62DD8B03"
});
exports.getPaintings = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var paintings, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Painting.find({})];
            case 1:
                paintings = _a.sent();
                res.send({ ok: true, paintings: paintings });
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
exports.handleAddAPainting = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, artist, title, year, technic, url, newPainting, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, artist = _a.artist, title = _a.title, year = _a.year, technic = _a.technic, url = _a.url;
                newPainting = new Painting({ artist: artist, title: title, year: year, technic: technic, url: url });
                return [4 /*yield*/, newPainting.save()];
            case 1:
                result = _b.sent();
                console.log(result);
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
exports.handleUpdateTitle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, paintingID, title, painting, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, paintingID = _a.paintingID, title = _a.title;
                if (!(paintingID && title)) return [3 /*break*/, 2];
                return [4 /*yield*/, Painting.updateOne({ _id: paintingID }, { title: title })];
            case 1:
                painting = _b.sent();
                res.send({ ok: true, painting: painting });
                console.log(painting);
                return [3 /*break*/, 3];
            case 2: throw new Error("paintingID or title is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.error(error_3);
                res.send({ error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handleDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var paintingID, painting, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                paintingID = req.body.paintingID;
                console.log(paintingID);
                if (!paintingID) return [3 /*break*/, 2];
                return [4 /*yield*/, Painting.deleteOne({ _id: paintingID })];
            case 1:
                painting = _a.sent();
                res.send({ ok: true, painting: painting });
                console.log(painting);
                return [3 /*break*/, 3];
            case 2: throw new Error("Didnt find such paintingID");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handleSelectTechnic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var technic, selectOil, selectCharcoal, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                technic = req.query.technic;
                return [4 /*yield*/, Painting.find({ technic: 'oil' })];
            case 1:
                selectOil = _a.sent();
                return [4 /*yield*/, Painting.find({ technic: "charcoal" })];
            case 2:
                selectCharcoal = _a.sent();
                if (technic === 'oil') {
                    res.send({ ok: true, selectOil: selectOil });
                }
                if (technic === "charcoal") {
                    res.send({ ok: true, selectCharcoal: selectCharcoal });
                }
                console.log(selectOil);
                console.log(selectCharcoal);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error(error_5);
                res.send({ error: error_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
Painting.find({ year: { $gte: 1984 } }).then(function (docs) { return console.log(docs); })["catch"](function (error) { return console.log(error.message); });
Painting.find({ artist: 'Dusan Malobabic', year: 1980 }).then(function (docs) { return console.log(docs); })["catch"](function (error) { return console.log(error.message); });
Painting.find({ technic: 'charcoal' }).then(function (docs) { return console.log(docs); })["catch"](function (error) { return console.log(error.message); });
// painting1.save();
// painting2.save();
// painting3.save();
// painting4.save();
// painting5.save();
// painting6.save();
// painting7.save();
// painting8.save();
// painting9.save();
// painting10.save();
// painting11.save();
// painting12.save();
// painting13.save();
// painting14.save();
// painting15.save();
// painting16.save();
// painting17.save();
// console.log(painting1);
// console.log(painting2);
// console.log(painting3);
// console.log(painting4);
// console.log(painting5);
// console.log(painting6);
// console.log(painting7);
// console.log(painting8);
// console.log(painting9);
// console.log(painting10);
// console.log(painting11);
// console.log(painting12);
// console.log(painting13);
// console.log(painting14);
// console.log(painting15);
// console.log(painting16);
// console.log(painting17);
