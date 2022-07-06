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
exports.getSearchData = void 0;
var helpers_1 = require("../helpers/helpers");
var allParties = [
    {
        name: 'Latin Groove',
        salsa: false,
        bachata: true,
        location: 'Petah Tikva',
        day: 'Monday',
        types: 'Bachata'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Thursday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Baila Bachata',
        salsa: false,
        bachata: true,
        location: 'Rehovot',
        day: 'Tuesday',
        types: 'Bachata'
    },
    {
        name: 'Baila Salsa',
        salsa: true,
        bachata: false,
        location: 'Rehovot',
        day: 'Wednesday',
        types: 'Salsa'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Tuesday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Havana',
        salsa: true,
        bachata: true,
        location: 'Tel aviv',
        day: 'Saturday',
        types: 'Bachata, Salsa'
    },
    {
        name: 'Baila Salsa',
        salsa: true,
        bachata: true,
        location: 'Rehovot',
        day: 'Saturday',
        types: 'Salsa'
    },
    {
        name: 'Bachata Beach',
        salsa: false,
        bachata: true,
        location: 'Bat-Yam',
        day: 'Friday',
        types: 'Bachata'
    },
];
function getSearchData(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, choosenDate, salsaCheckBox, bachataCheckBox, day, clubsResults, i;
        return __generator(this, function (_b) {
            try {
                _a = req.body, choosenDate = _a.choosenDate, salsaCheckBox = _a.salsaCheckBox, bachataCheckBox = _a.bachataCheckBox;
                day = helpers_1.getDayName(choosenDate);
                console.log(day);
                clubsResults = [];
                for (i = 0; i < allParties.length; i++) {
                    if ((allParties[i].day === day) && (allParties[i].bachata === bachataCheckBox || allParties[i].salsa === salsaCheckBox)) {
                        clubsResults.push(allParties[i]);
                    }
                }
                res.send(clubsResults);
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getSearchData = getSearchData;
;
