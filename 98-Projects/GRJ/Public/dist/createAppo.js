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
function createSingleAppo() {
    return __awaiter(this, void 0, void 0, function () {
        var createSingleAppo;
        return __generator(this, function (_a) {
            createSingleAppo = document.querySelector(".createSingleAppo");
            createSingleAppo.innerHTML =
                "<h1 class=\"h1\">Create single Appo</h1>\n<div class=\"formsDiv\">\n  <form class=\"form\" onsubmit=\"handleCreateAppo(event)\">\n    <input\n      class=\"form__input\"\n      type=\"date\"\n      name=\"date\"\n      placeholder=\"When?\"\n    />\n    <input\n      class=\"form__input\"\n      type=\"time\"\n      name=\"time\"\n      placeholder=\"Select a time\"\n    />\n    <select onChange=\"changeDoctorsList(event);\" class=\"form__input\" id=\"doctorType\" name=\"doctorType\">\n      <option value=\"family\">Family</option>\n      <option value=\"bloodTest\">Blood test</option>\n      <option value=\"nurse\">Nurse</option>\n      </select>\n\n      <div class=\"doctorsNameBox\">\n    \n      </div>\n\n    <button class=\"button\" type=\"submit\">Create</button>\n  </form>\n";
            return [2 /*return*/];
        });
    });
}
function changeDoctorsList() {
    return __awaiter(this, void 0, void 0, function () {
        var doctorType, data, allDoctors, doctorsList, doctorsNameBox;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doctorType = document.getElementById('doctorType').value;
                    return [4 /*yield*/, axios.post('/doctors/getDoctorsByType', { doctorType: doctorType })];
                case 1:
                    data = (_a.sent()).data;
                    allDoctors = data;
                    doctorsList = "";
                    doctorsNameBox = document.querySelector(".doctorsNameBox");
                    doctorsNameBox.innerHTML = "";
                    allDoctors.forEach(function (doctor) {
                        doctorsList += "<option value=\"" + doctor._id + "\">Dr. " + doctor.lastName + " (" + doctor.doctorId + ")</option>";
                    });
                    doctorsNameBox.innerHTML =
                        "<select class=\"form__input\" id=\"doctorsNames\" name=\"doctorsNames\">\n    " + doctorsList + "\n    </select>";
                    return [2 /*return*/];
            }
        });
    });
}
function handleCreateAppo(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var date, doctorType, doctorId, time, data, user, error, appoArray, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    date = ev.target.date.value;
                    doctorType = ev.target[2].value;
                    doctorId = ev.target[3].value;
                    time = ev.target.time.value;
                    console.log(date, doctorType, doctorId, time);
                    if (!date || !time || !doctorId || !doctorType)
                        throw new Error('one of the insert is missing');
                    return [4 /*yield*/, axios.post("/appo/createAppo", { date: date, doctorType: doctorType, doctorId: doctorId, time: time })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    user = data.user, error = data.error;
                    if (error)
                        throw error;
                    if (user) {
                        appoArray = data;
                        console.log(appoArray);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleCreateNewDoctor(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, doctorId, doctorType, data, doctor, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    firstName = ev.target.doctorFirstName.value;
                    lastName = ev.target.doctorLastName.value;
                    doctorId = ev.target.doctorId.value;
                    doctorType = ev.target.doctorType.value;
                    if (!firstName || !lastName || !doctorId || !doctorType)
                        throw new Error("One of the parameters is missing");
                    return [4 /*yield*/, axios.post('/doctors/createNewDoctor', { firstName: firstName, lastName: lastName, doctorId: doctorId, doctorType: doctorType })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    doctor = data.doctor, error = data.error;
                    if (error)
                        throw error;
                    console.log(doctor);
                    console.log("Dr." + doctor.lastName + " is succesfuly created");
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleGetAllDoctors() {
    return __awaiter(this, void 0, void 0, function () {
        var doctorsBtns, data, allDoctors, html_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doctorsBtns = document.querySelector("#doctorsBtns");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get('/doctors/getAllDoctors')];
                case 2:
                    data = (_a.sent()).data;
                    allDoctors = data;
                    console.log(allDoctors);
                    html_1 = "";
                    allDoctors.forEach(function (doctor) {
                        html_1 += "<button id=\"" + doctor._id + "\" onclick ='handleSelectDoctor(event)' >Dr. " + doctor.lastName + " (" + doctor.doctorType + ") </button>";
                    });
                    doctorsBtns.innerHTML = html_1;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleSelectDoctor(ev) {
    ev.preventDefault();
    var form = document.querySelector(".createWorkSchedule");
    form.innerHTML = "";
    var selectedDoctor_id = ev.target.id;
    var html = "";
    var today = new Date();
    for (var i = 0; i < 7; i++) {
        today.setDate(today.getDate() + i);
        var dayName = today.toLocaleString('en-us', { weekday: 'long' });
        html += "<br> <input id=\"" + todayDate(i) + "\" type=\"checkbox\" /> " + todayDate(i) + " " + dayName;
    }
    form.innerHTML = "<h1></h1>\n <form class=\"form\" id=\"" + selectedDoctor_id + "\" onsubmit=\"createDoctorSchedule(event)\">\n\n" + html + "\n\n<br>\n<button class=\"button\" type=\"submit\">Create work schedule</button>\n\n</form>\n";
}
function todayDate(addDays) {
    var today = new Date();
    today.setDate(today.getDate() + addDays);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
function createDoctorSchedule(ev) {
    ev.preventDefault();
    console.log(ev);
}
