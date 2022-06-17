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
exports.getAllArticales = exports.getScore = exports.getAllTransfers = exports.handleDeleteTeam = exports.getAllTeams = void 0;
var teams = [{ name: 'MTA', teamId: 'abc', backgroundColor: 'yellow', symbol: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png' },
    { name: 'HTA', teamId: 'abcd', backgroundColor: 'red', symbol: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png' }];
function getAllTeams(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ teams: teams });
            }
            catch (error) {
                console.log('teams array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllTeams = getAllTeams;
exports.handleDeleteTeam = function (req, res) {
    try {
        var teamId_1 = req.body.teamId;
        var index = teams.findIndex(function (team) { return team.teamId === teamId_1; });
        if (index === -1)
            throw new Error('team not found');
        teams = teams.filter(function (team) { return team.teamId === teamId_1; });
        console.log('teams', teams);
        res.send({ teams: teams });
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
var transfers = [{ headline: 'השוער סטפן מרינוביץ’ סיכם במועדון לעונה אחת.', Id: 'a', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/7OMXKR6DCZOPHJILYFONMJXGPA.jpg', url: 'https://www.htafc.co.il/2022/06/15/%d7%94%d7%a9%d7%95%d7%a2%d7%a8-%d7%a1%d7%98%d7%a4%d7%9f-%d7%9e%d7%a8%d7%99%d7%a0%d7%95%d7%91%d7%99%d7%a5-%d7%a1%d7%99%d7%9b%d7%9d-%d7%91%d7%9e%d7%95%d7%a2%d7%93%d7%95%d7%9f-%d7%9c%d7%a2%d7%95%d7%a0/', text: 'מרינוביץ’ (30) שוער נבחרת ניו זינלנד שיחק בעברו בגרמניה וב-MLS. בעונה שעברה שיחק בנוף הגליל שם רשם 28 הופעות ליגה.' },
    { headline: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון', Id: 'ab', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/%D7%94%D7%95%D7%A8%D7%93%D7%94.jpg', url: 'https://www.htafc.co.il/2022/06/12/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%90%d7%97%d7%95%d7%a8%d7%99-%d7%92%d7%95%d7%93%d7%a4%d7%a8%d7%99%d7%93-%d7%a8%d7%95%d7%9e%d7%90%d7%a8%d7%98%d7%95-%d7%a1%d7%99%d7%9b%d7%9d-%d7%90%d7%aa-%d7%aa%d7%a0/', text: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון לעונה אחת עם אופציה לעונה נוספת ויחתום בכפוף למעבר בדיקות רפואיות' },
    { headline: 'הקשר הישאם לאיוס חתם במועדון ל-3 שנים', Id: 'abc', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/welcome_Hisham-Layous.png', url: 'https://www.htafc.co.il/2022/06/10/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%99%d7%a9%d7%90%d7%9d-%d7%9c%d7%90%d7%99%d7%95%d7%a1-%d7%a0%d7%a8%d7%9b%d7%a9-%d7%9e-%d7%9e-%d7%a1-%d7%9b%d7%a4%d7%a8-%d7%a7%d7%90%d7%a1%d7%9d-%d7%95%d7%97%d7%aa/', text: 'הקשר הישאם לאיוס נרכש מ-מ.ס כפר קאסם וחתם במועדון ל-3 שנים' }];
function getAllTransfers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ transfers: transfers });
            }
            catch (error) {
                console.log('transfers array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllTransfers = getAllTransfers;
var score = [{ fTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', sTeamSymbol: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png',
        id: 'a', fTeamScore: '3', sTeamScore: '0' }];
function getScore(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ score: score });
            }
            catch (error) {
                console.log('score array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getScore = getScore;
var articles = [{ headline: 'השוער סטפן מרינוביץ’ סיכם במועדון לעונה אחת.', Id: 'a', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/7OMXKR6DCZOPHJILYFONMJXGPA.jpg', url: 'https://www.htafc.co.il/2022/06/15/%d7%94%d7%a9%d7%95%d7%a2%d7%a8-%d7%a1%d7%98%d7%a4%d7%9f-%d7%9e%d7%a8%d7%99%d7%a0%d7%95%d7%91%d7%99%d7%a5-%d7%a1%d7%99%d7%9b%d7%9d-%d7%91%d7%9e%d7%95%d7%a2%d7%93%d7%95%d7%9f-%d7%9c%d7%a2%d7%95%d7%a0/', text: 'מרינוביץ’ (30) שוער נבחרת ניו זינלנד שיחק בעברו בגרמניה וב-MLS. בעונה שעברה שיחק בנוף הגליל שם רשם 28 הופעות ליגה.' },
    { headline: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון', Id: 'ab', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/%D7%94%D7%95%D7%A8%D7%93%D7%94.jpg', url: 'https://www.htafc.co.il/2022/06/12/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%90%d7%97%d7%95%d7%a8%d7%99-%d7%92%d7%95%d7%93%d7%a4%d7%a8%d7%99%d7%93-%d7%a8%d7%95%d7%9e%d7%90%d7%a8%d7%98%d7%95-%d7%a1%d7%99%d7%9b%d7%9d-%d7%90%d7%aa-%d7%aa%d7%a0/', text: 'הקשר האחורי גודפריד רומארטו סיכם את תנאיו במועדון לעונה אחת עם אופציה לעונה נוספת ויחתום בכפוף למעבר בדיקות רפואיות' },
    { headline: 'הקשר הישאם לאיוס חתם במועדון ל-3 שנים', Id: 'abc', photo: 'https://www.htafc.co.il/wp-content/uploads/2022/06/welcome_Hisham-Layous.png', url: 'https://www.htafc.co.il/2022/06/10/%d7%94%d7%a7%d7%a9%d7%a8-%d7%94%d7%99%d7%a9%d7%90%d7%9d-%d7%9c%d7%90%d7%99%d7%95%d7%a1-%d7%a0%d7%a8%d7%9b%d7%a9-%d7%9e-%d7%9e-%d7%a1-%d7%9b%d7%a4%d7%a8-%d7%a7%d7%90%d7%a1%d7%9d-%d7%95%d7%97%d7%aa/', text: 'הקשר הישאם לאיוס נרכש מ-מ.ס כפר קאסם וחתם במועדון ל-3 שנים' }];
function getAllArticales(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ articles: articles });
            }
            catch (error) {
                console.log('articles array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllArticales = getAllArticales;
