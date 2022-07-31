// import { stringify } from "querystring";
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
// import { json } from "stream/consumers";
function handleLoadCoach() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/events/get-events')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderEvent(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderEvent(events) {
    try {
        var html_1 = '';
        events.forEach(function (event) {
            html_1 +=
                "<div class=\"event1\">\n            <h2>Lesson:" + event.lesson + "</h2>\n            <h2>Date:" + event.date + "</h2>\n            <h2>Price:" + event.price + "</h2>\n            <h2>Coach:" + event.coach + "</h2>\n            <button onclick=\"deleteLesson(" + event._id + ")\"></button>\n            </div>";
        });
        var root = document.querySelector('#root');
        if (!root)
            throw new Error('No root !');
        root.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
function deleteLesson(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/events/delete-for-coach', { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddEvent(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var lesson, dateSrart, dateRnd, price, coach, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    lesson = ev.target.lesson.value;
                    dateSrart = ev.target.date.value;
                    dateRnd = ev.target.date.value;
                    price = ev.target.price.value;
                    coach = ev.target.coach.value;
                    return [4 /*yield*/, axios.post('/events/add-events', { lesson: lesson, dateSrart: dateSrart, dateRnd: dateRnd, price: price, coach: coach })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleEvent() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/events/get-events')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderForCustomer(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderForCustomer(events) {
    try {
        var html_2 = '';
        events.forEach(function (event) {
            html_2 +=
                "<div class=\"event1\">\n        <h2>Lesson:" + event.lesson + "</h2>\n        <h2>Date:" + event.dateSrart + "</h2>\n        <h2>Date:" + event.dateEnd + "</h2>\n        <h2>Price:" + event.price + "</h2>\n        <h2>Coach:" + event.coach + "</h2>\n        <button id=\"addToCartBtn\" onclick=\"addToCart(" + event._id + ")\">Add Lesson to My Cart</button>\n        </div>";
        });
        var root = document.querySelector('#root');
        if (!root)
            throw new Error('No root !');
        root.innerHTML = html_2;
    }
    catch (error) {
        console.log(error);
    }
}
function addToCart(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log(id);
                    return [4 /*yield*/, axios.post('/add-to-cart', { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleCart() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                renderCart();
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    });
}
function moveToCart() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                window.location.href = './cart.html';
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    });
}
function renderCart() {
    return __awaiter(this, void 0, void 0, function () {
        var data, root, html_3, i, total, totalToPay, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/events/find-cart-by-user')];
                case 1:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    html_3 = '';
                    data.forEach(function (event) {
                        html_3 += "<div id=\"cart\">\n        <h3>Lesson:" + event.lesson + "</h3>\n        <h3>Date:" + event.date + "</h3>\n        <h3>Price:" + event.price + "</h3>\n        <button onclick=\"deleteLessonFromCart(" + event._id + ")\"></button>\n        </div>";
                    });
                    root.innerHTML = html_3;
                    for (i = 0; i < data.length; i++) {
                        total = data.price[i] + data.price[i];
                        totalToPay = document.querySelector('#totalToPay');
                        totalToPay.innerHTML = "total to pay <br> " + (total);
                    }
                    ;
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function deleteLessonFromCart(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/events/delete-from-cart', { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
