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
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
function initUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, users, error, error_1;
========
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, data, error_1;
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
                    return [4 /*yield*/, axios.get("/users/user-get")];
========
                    ev.preventDefault();
                    email = ev.target.email.value;
                    password = ev.target.password.value;
                    return [4 /*yield*/, axios.post('/users/register', { email: email, password: password })];
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    if (error)
                        throw new Error(error);
                    console.log(data);
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
                    renderUser(data);
========
                    if (!data)
                        throw new Error;
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
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
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
function handleDeleteUser(userID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_2;
========
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, data, ok, error_2;
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
                    return [4 /*yield*/, axios.post("/users/user-delete", { userID: userID })];
                case 1:
                    data = (_a.sent()).data;
                    renderUser(data);
                    console.log(data);
========
                    ev.preventDefault();
                    email = ev.target.email.value;
                    password = ev.target.password.value;
                    return [4 /*yield*/, axios.post('/users/login', { email: email, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok;
                    if (!ok) {
                        console.log('error');
                    }
                    else {
                        window.location.href = './events.html';
                    }
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
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
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
;
function handleAddUser(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, error_3;
========
function handleCoachLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, data, ok, error_3;
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
                    e.preventDefault();
                    name = e.target.elements.name.value;
                    return [4 /*yield*/, axios.post("/users/user-add", { name: name })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderUser(data);
                    e.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
========
                    ev.preventDefault();
                    email = ev.target.email.value;
                    password = ev.target.password.value;
                    return [4 /*yield*/, axios.post('/users/coachLogin', { email: email, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok;
                    if (ok) {
                        window.location.href = './coach.html';
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
<<<<<<<< HEAD:01-Node-Mongoose-express/06-routes/no-name/public/dist/index.js
function renderUser(users) {
    try {
        var root = document.querySelector("#root");
        var html_1 = "";
        users.forEach(function (user) {
            html_1 += "\n          <div>\n           <p>" + user.name + "</p>\n           <button class=\"button\" onclick='handleDeleteUser(\"" + user.userId + "\")'>Delete</button>\n           </div>\n                  ";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
========
>>>>>>>> GRJ:98-Projects/03-Vanilla-Node-Mongo/shira-hanoch-meir/public/dist/index.js
