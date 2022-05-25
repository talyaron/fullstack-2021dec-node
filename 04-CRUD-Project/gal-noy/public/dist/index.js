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
function handleGetGame() {
    return __awaiter(this, void 0, void 0, function () {
        var data, play, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("get success");
                    return [4 /*yield*/, axios.get("/api/user1")];
                case 1:
                    data = (_a.sent()).data;
                    play = data.play, error = data.error;
                    if (error)
                        throw new Error(error);
                    console.log(play);
                    build_gameStatistic(play);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
handleGetGame();
function hundleEditGame(event) {
    return __awaiter(this, void 0, void 0, function () {
        var editScreen, _i, _a, i, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    editScreen = {};
                    console.log(event);
                    for (_i = 0, _a = event.target; _i < _a.length; _i++) {
                        i = _a[_i];
                        console.log(i.type, i.name, i.value);
                        if (i.type != 'submit') {
                            if (i.type === 'text') {
                                editScreen[i.name] = i.value;
                            }
                            else if (i.type === 'number') {
                                editScreen[i.name] = i.value;
                            }
                        }
                    }
                    console.log(editScreen);
                    return [4 /*yield*/, axios.post('/api/user1', { editScreen: editScreen })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function build_gameStatistic(play) {
    var GameStatsDiv = document.querySelector('.gameStats');
    var top_nav = document.querySelector('.top_nav');
    console.log(play);
    top_nav.innerHTML = "<div class=\"teamLogo teamLogo__1\">\n  <img src='" + play.TeamA.logo + "'>\n  <span class=\"team_name team_name__1\">" + play.TeamA.name + "</span>\n</div>\n\n<div class=\"scoreTeam1\">\n" + play.TeamA.stat.goals + "\n</div>\n<span>-</span>\n<div class=\"scoreTeam2\">\n" + play.TeamB.stat.goals + "\n</div>\n<div class=\"teamLogo teamLogo__2\">\n<img src=\"" + play.TeamB.logo + "\">\n  <span class=\"team_name team_name__2\">" + play.TeamB.name + "</span>\n</div>\n</div>";
    GameStatsDiv.innerHTML = "<div class=\"stat_row\"><div> <img src=\"" + play.TeamA.logo + "\"></div><div>GAME STATS</div><div> <img src=\"" + play.TeamB.logo + "\"></div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.shots + "</div><div>SHOTS</div><div>" + play.TeamB.stat.shots + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.shots_on_target + "</div><div>SHOTS ON TARGET</div><div>" + play.TeamB.stat.shots_on_target + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.possesion + "</div><div>POSSESION</div><div>" + play.TeamB.stat.possesion + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.passes + "</div><div>PASSES</div><div>" + play.TeamB.stat.passes + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.fouls + "</div><div>FOULS</div><div>" + play.TeamB.stat.fouls + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.yellow_cards + "</div><div>YELLOW CARDS</div><div>" + play.TeamB.stat.yellow_cards + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.red_cards + "</div><div>RED CARDS</div><div>" + play.TeamB.stat.red_cards + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.offsides + "</div><div>OFFSIDES</div><div>" + play.TeamB.stat.offsides + "</div></div>\n  <div class=\"stat_row\"><div>" + play.TeamA.stat.corners + "</div><div>CORNERS</div><div>" + play.TeamB.stat.corners + "</div></div>";
}
