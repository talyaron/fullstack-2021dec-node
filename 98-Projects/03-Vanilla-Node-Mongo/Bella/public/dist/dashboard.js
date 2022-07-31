// import Chartjs, { Chart } from 'chart.js';
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
var employeeLabel = [], employeeSalaryData = [], employeeAgeData = [];
function dummyChart() {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, chart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDummyData()];
                case 1:
                    _a.sent();
                    ctx = document.getElementById('myChart');
                    chart = new Chart(ctx, {
                        // The type of chart
                        type: 'bar',
                        // The data for the dataset
                        data: {
                            labels: employeeLabel,
                            datasets: [{
                                    label: 'Employee Salary',
                                    backgroundColor: 'blue',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeSalaryData
                                },
                                {
                                    label: 'Employee Age',
                                    backgroundColor: 'pink',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeAgeData
                                }
                            ]
                        },
                        // Configuration options
                        options: {
                            tooltips: {
                                mode: 'index'
                            }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function secondChart() {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, chart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDummyData()];
                case 1:
                    _a.sent();
                    ctx = document.getElementById('myChart2');
                    chart = new Chart(ctx, {
                        // The type of chart
                        type: 'bar',
                        // The data for the dataset
                        data: {
                            labels: employeeLabel,
                            datasets: [{
                                    label: 'Employee Salary',
                                    backgroundColor: 'green',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeSalaryData
                                },
                                {
                                    label: 'Employee Age',
                                    backgroundColor: 'purple',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeAgeData
                                }
                            ]
                        },
                        // Configuration options
                        options: {
                            tooltips: {
                                mode: 'index'
                            }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function thirdChart() {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, chart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDummyData()];
                case 1:
                    _a.sent();
                    ctx = document.getElementById('myChart3');
                    chart = new Chart(ctx, {
                        // The type of chart
                        type: 'bubble',
                        // The data for the dataset
                        data: {
                            labels: employeeLabel,
                            datasets: [{
                                    label: 'Employee Salary',
                                    backgroundColor: 'magenta',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeSalaryData
                                },
                                {
                                    label: 'Employee Age',
                                    backgroundColor: 'orange',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeAgeData
                                }
                            ]
                        },
                        // Configuration options
                        options: {
                            tooltips: {
                                mode: 'index'
                            }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function forthChart() {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, chart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDummyData()];
                case 1:
                    _a.sent();
                    ctx = document.getElementById('myChart4');
                    chart = new Chart(ctx, {
                        // The type of chart
                        type: 'line',
                        // The data for the dataset
                        data: {
                            labels: employeeLabel,
                            datasets: [{
                                    label: 'Employee Salary',
                                    backgroundColor: 'red',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeSalaryData
                                },
                                {
                                    label: 'Employee Age',
                                    backgroundColor: 'yellow',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: employeeAgeData
                                }
                            ]
                        },
                        // Configuration options
                        options: {
                            tooltips: {
                                mode: 'index'
                            }
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
secondChart();
thirdChart();
forthChart();
dummyChart();
//Fetch Data from API
function getDummyData() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response, barChatData, salary, age, name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://dummy.restapiexample.com/api/v1/employees";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    barChatData = _a.sent();
                    salary = barChatData.data.map(function (obg) { return obg.employee_salary; });
                    console.log(salary);
                    age = barChatData.data.map(function (obg) { return obg.employee_age; });
                    name = barChatData.data.map(function (obg) { return obg.employee_name; });
                    employeeSalaryData = salary;
                    employeeAgeData = age;
                    employeeLabel = name;
                    return [2 /*return*/];
            }
        });
    });
}
