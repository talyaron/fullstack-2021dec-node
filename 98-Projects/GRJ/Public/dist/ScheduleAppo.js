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
function getUserId() {
    try {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var userId = urlParams.get("userId");
        console.log(userId);
        return userId;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
function handleSelectDoctorType(ev) {
    ev.preventDefault();
    console.log(ev.target.id);
    var doctorType = ev.target.id;
    var searchBox = document.querySelector("#searchBox");
    var html = " <br> <form onsubmit=\"handleSchedule(event)\">\n<input type=\"date\" name=\"date\" >\n<input type=\"hidden\" name=\"doctorType\" id=" + doctorType + ">\n<button type=\"submit\">Search</button>\n\n</form>";
    searchBox.innerHTML = html;
}
function handleSchedule(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var date, doctorType, data, filteredAppos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    console.log();
                    date = ev.target.date.value;
                    doctorType = ev.target.doctorType.id;
                    console.log(date, doctorType);
                    return [4 /*yield*/, axios.post("/appo/getAppo", { doctorType: doctorType, date: date })];
                case 1:
                    data = (_a.sent()).data;
                    filteredAppos = data;
                    console.log(filteredAppos);
                    renderAppo(filteredAppos);
                    return [2 /*return*/];
            }
        });
    });
}
function renderAppo(apposArray) {
    console.log(apposArray);
    var filteredAppo = document.querySelector('#filteredAppo');
    var html = "";
    apposArray.forEach(function (appo) {
        html += "<button id=\"" + appo._id + "\" onclick=\"handlePickAppoTime(event)\">" + appo.time + "</button>";
        // html += `date: ${appo.date} <br>
        // doctorType: ${appo.doctorType} <br>
        // doctorId: ${appo.doctorId} <br>
        // time: ${appo.time} <br>
        // `
    });
    console.log(apposArray[0]);
    filteredAppo.innerHTML = html;
}
function handlePickAppoTime(ev) {
    var appoId = ev.path[0].id;
    var userId = getUserId();
    console.log(userId);
    console.log(ev.path[0].id);
    pairAppoToUser(userId, appoId);
}
function pairAppoToUser(userId, appoId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, pairedAppo, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.put("/appo/pairAppoToUser", { userId: userId, appoId: appoId })];
                case 1:
                    data = (_a.sent()).data;
                    pairedAppo = data.pairedAppo, error = data.error;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
