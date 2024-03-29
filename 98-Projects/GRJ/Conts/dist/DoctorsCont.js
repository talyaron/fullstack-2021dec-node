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
exports.createDoctorWorkSchedule = exports.getDoctorsByType = exports.createNewDoctor = exports.getAllDoctors = void 0;
var DoctorModel_1 = require("../Models/DoctorModel");
var AppoModel_1 = require("../Models/AppoModel");
function getAllDoctors(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allDoctors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, DoctorModel_1["default"].find()];
                case 1:
                    allDoctors = _a.sent();
                    res.send(allDoctors);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getAllDoctors = getAllDoctors;
function createNewDoctor(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, doctorId, doctorType, newDr, newDrDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    console.log("creating new dr");
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, doctorId = _a.doctorId, doctorType = _a.doctorType;
                    console.log(firstName, lastName, doctorId, doctorType);
                    newDr = new DoctorModel_1["default"]({ firstName: firstName, lastName: lastName, doctorId: doctorId, doctorType: doctorType });
                    return [4 /*yield*/, newDr.save()];
                case 1:
                    newDrDB = _b.sent();
                    res.send({ success: true, doctor: newDrDB });
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
exports.createNewDoctor = createNewDoctor;
function getDoctorsByType(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var doctorType, allDoctors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doctorType = req.body.doctorType;
                    return [4 /*yield*/, DoctorModel_1["default"].find({ doctorType: doctorType })];
                case 1:
                    allDoctors = _a.sent();
                    res.send(allDoctors);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getDoctorsByType = getDoctorsByType;
function createDoctorWorkSchedule(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, detailsArray, doctor_id, doctorId, userId, doctor, doctorType;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, detailsArray = _a.detailsArray, doctor_id = _a.doctor_id;
                    console.log(doctor_id);
                    doctorId = doctor_id;
                    userId = 'empty';
                    return [4 /*yield*/, DoctorModel_1["default"].find({ _id: doctorId })];
                case 1:
                    doctor = _b.sent();
                    doctorType = doctor.doctorType;
                    console.log(detailsArray[0].date);
                    detailsArray.forEach(function (day) {
                        var date = day.date;
                        create8to5workDay(userId, doctorId, doctorType, date);
                    });
                    res.send("The appoitments created successfully");
                    return [2 /*return*/];
            }
        });
    });
}
exports.createDoctorWorkSchedule = createDoctorWorkSchedule;
function create8to5workDay(userId, doctorId, doctorType, date) {
    return __awaiter(this, void 0, void 0, function () {
        var eightAM, fivePM, eightAMtotalInMinutes, fivePMtotalInMinutes, timeInMin, minutes, hours, output, time, newAppo, newAppoDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eightAM = "08:00";
                    fivePM = "17:00";
                    eightAMtotalInMinutes = (parseInt(eightAM.split(":")[0]) * 60) + parseInt(eightAM.split(":")[1]);
                    fivePMtotalInMinutes = (parseInt(fivePM.split(":")[0]) * 60) + parseInt(fivePM.split(":")[1]);
                    timeInMin = eightAMtotalInMinutes;
                    _a.label = 1;
                case 1:
                    if (!(timeInMin < fivePMtotalInMinutes)) return [3 /*break*/, 4];
                    minutes = (timeInMin % 60).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    });
                    hours = ((timeInMin - minutes) / 60).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    });
                    output = hours + ':' + minutes;
                    time = output;
                    newAppo = new AppoModel_1["default"]({ userId: userId, doctorId: doctorId, doctorType: doctorType, date: date, time: time });
                    return [4 /*yield*/, newAppo.save()];
                case 2:
                    newAppoDB = _a.sent();
                    console.log(newAppoDB);
                    _a.label = 3;
                case 3:
                    timeInMin += 15;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
