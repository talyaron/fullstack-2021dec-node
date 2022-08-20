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
                "<div class=\"event1\">\n            <p class=\"evDetails\">Lesson:" + event.lesson + "</p>\n            <p class=\"evDetails\">Start At:" + event.dateS2 + "</p>\n            <p class=\"evDetails\">End At:" + event.dateE2 + "</p>\n            <p class=\"evDetails\">Time:" + event.hour + "</p>\n\n            <p class=\"evDetails\">Day:" + event.day + "</p>\n            <p class=\"evDetails\">Price:" + event.price + "</p>\n            <p class=\"evDetails\">Coach:" + event.coach + "</p>\n            <button onclick=\"deleteLesson('" + event._id + "')\" class=\"evDetails\">delete lesson</button>\n            </div>";
        });
        var root1 = document.querySelector('#root1');
        if (!root1)
            throw new Error('No root !');
        root1.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
function deleteLesson(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/events/delete-for-coach', { _id: _id })];
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
        var lesson, day, dateStart, dateEnd, hour, dateS, dateS1, dateS2, dateE, dateE1, dateE2, price, coach, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    lesson = ev.target.lesson.value;
                    day = ev.target.day.value;
                    dateStart = ev.target.dateStart.value;
                    dateEnd = ev.target.dateEnd.value;
                    hour = ev.target.hour.value;
                    dateS = new Date(dateStart);
                    dateS1 = dateS.toUTCString();
                    dateS2 = dateS1.replace("00:00:00 GMT", "");
                    dateE = new Date(dateStart);
                    dateE1 = dateE.toUTCString();
                    dateE2 = dateE1.replace("00:00:00 GMT", "");
                    price = ev.target.price.value;
                    coach = ev.target.coach.value;
                    return [4 /*yield*/, axios.post('/events/add-events', { lesson: lesson, day: day, dateS2: dateS2, dateE2: dateE2, hour: hour, price: price, coach: coach })];
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
                "<div class=\"event2\">\n        <h2 class=\"evDetails1\">Lesson:" + event.lesson + "</h2>\n        <h2 class=\"evDetails1\">start at:" + event.dateS2 + "</h2>\n        <h2 class=\"evDetails1\">end at:" + event.dateE2 + "</h2>\n        <h2 class=\"evDetails1\">Time:" + event.hour + "</h2>\n        <h2 class=\"evDetails1\">day:" + event.day + "</h2>\n        <h2 class=\"evDetails1\">Price:" + event.price + "</h2>\n        <h2 class=\"evDetails1\">Coach:" + event.coach + "</h2>\n        <button id=\"addToCartBtn\" onclick=\"addToCart('" + event._id + "')\">Add to Cart</button>\n        </div>";
        });
        var root2 = document.querySelector('#root2');
        if (!root2)
            throw new Error('No root !');
        root2.innerHTML = html_2;
    }
    catch (error) {
        console.log(error);
    }
}
function addToCart(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log(_id);
                    return [4 /*yield*/, axios.post('/events/add-to-cart', { _id: _id })];
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
        var data, root, cart_1, i, total, totalToPay, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/events/find-cart-by-user')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    root = document.querySelector('#root');
                    cart_1 = '';
                    data.forEach(function (event) {
                        cart_1 += "<div id=\"cart\">\n        <h3 class=\"evDetails2\">Lesson:" + event.lesson + "</h3>\n        <h2 class=\"evDetails2\">start at:" + event.dateS2 + "</h2>\n        <h2 class=\"evDetails2\">end at:" + event.dateE2 + "</h2>\n        <h2 class=\"evDetails2\">Time:" + event.hour + "</h2>\n\n        <h2 class=\"evDetails2\">day:" + event.day + "</h2>\n        <h3 class=\"evDetails2\">Price:" + event.price + "</h3>\n        <button onclick=\"deleteLessonFromCart('" + event._id + "')\">delete lesson</button>\n        </div>";
                    });
                    root.innerHTML = cart_1;
                    // let total = 0;
                    for (i = 0; i < data.length; i++) {
                        console.log(data[i].price);
                        total = data.reduce(function (acc, lesson) { return acc + lesson.price; }, 0);
                        totalToPay = document.querySelector('#totalToPay');
                        totalToPay.innerHTML = "<h1>total to pay <br> " + (total) + " nis</h1>";
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
function deleteLessonFromCart(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/events/delete-from-cart', { _id: _id })];
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
