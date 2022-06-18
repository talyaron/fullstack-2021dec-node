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
function getTeamId() {
    try {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var teamId = urlParams.get('Id');
        return teamId;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function handleDeleteTeam() {
    return __awaiter(this, void 0, void 0, function () {
        var teamId, data, teams, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    teamId = getTeamId();
                    return [4 /*yield*/, axios["delete"]('/HTA/Team-delete', {
                            data: { teamId: teamId }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    teams = data.teams;
                    renderTopNav(teams);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3:
                    handleGetTransfers();
                    getScore();
                    getAllArticales();
                    return [2 /*return*/];
            }
        });
    });
}
function renderTopNav(teams) {
    var team = teams[0];
    var html = "";
    html += "<div id=\"" + team.name + "\">\n<img src=\"" + team.symbol + "\" class=\"teamIcon\">\n<a href='https://www.htafc.co.il/' class=\"url\"><button>" + team.name + " official website</button></a>\n<a href='index.html'>\n<h1>Sportil</h1>\n</a>\n</div>";
    var topNav = document.querySelector('#topNav');
    topNav.innerHTML = html;
    topNav.style.backgroundColor = "" + team.backgroundColor;
}
function handleGetTransfers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, transfers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/HTA/get-transfers')];
                case 1:
                    data = (_a.sent()).data;
                    transfers = data.transfers;
                    if (!Array.isArray(transfers))
                        throw new Error('transfers should be an array ant it is not');
                    renderTransfer(transfers);
                    return [2 /*return*/];
            }
        });
    });
}
function renderTransfer(transfers) {
    var teamId = getTeamId();
    var html = "";
    transfers.forEach(function (transfer) {
        html +=
            "<div class=\"transfer" + teamId + "\">\n    <div class=\"box2\">\n\t<a href=\"" + transfer.url + "\">\n    <img src=\"" + transfer.photo + "\" class=\"photo\">\n\t</a>\n    <p>" + transfer.headline + "</p>\n    <h4>" + transfer.text + "</h4>   \n    </div>";
    });
    var transferBar = document.querySelector('#transferBar');
    transferBar.innerHTML = html;
}
function getScore() {
    return __awaiter(this, void 0, void 0, function () {
        var data, score;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/HTA/get-score')];
                case 1:
                    data = (_a.sent()).data;
                    score = data.score;
                    if (!Array.isArray(score))
                        throw new Error('score should be an array ant it is not');
                    renderscore(score);
                    return [2 /*return*/];
            }
        });
    });
}
function renderscore(scores) {
    var teamId = getTeamId();
    var score = scores[0];
    var html = "";
    html +=
        "<div class=\"score" + teamId + "\">\n\t<div class=\"fTeam\">\n\t<img src=\"" + score.fTeamSymbol + "\" class=\"fSymbol\">\n\t<p>" + score.fTeamScore + "</p>\n\t</div>\n\t<p>-</p>\n\t<div class=\"sTeam\">\n\t<p>" + score.sTeamScore + "</p>\n\t<img src=\"" + score.sTeamSymbol + "\" class=\"sSymbol\">\n\t</div>\n\t</div>";
    var bar = document.querySelector('#scoreBar');
    bar.innerHTML = html;
}
function getAllArticales() {
    return __awaiter(this, void 0, void 0, function () {
        var data, articles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/HTA/get-articles')];
                case 1:
                    data = (_a.sent()).data;
                    articles = data.articles;
                    if (!Array.isArray(articles))
                        throw new Error('articles should be an array ant it is not');
                    renderarticle(articles);
                    return [2 /*return*/];
            }
        });
    });
}
function renderarticle(articles) {
    var teamId = getTeamId();
    var html = "";
    articles.forEach(function (article) {
        html +=
            "<div class=\"article" + teamId + "\">\n    <div class=\"box2\">\n\t<a href=\"" + article.url + "\">\n    <img src=\"" + article.photo + "\" class=\"photo\">\n\t</a>\n    <p>" + article.headline + "</p>\n    <h4>" + article.text + "</h4>   \n    </div>";
    });
    var articleBar = document.querySelector('#articleBar');
    articleBar.innerHTML = html;
}
