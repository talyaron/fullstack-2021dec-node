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
var axios;
console.log("Connected!");
function handleRegister(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, name, password, data, result, error, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = e.target.elements, email = _a.email, name = _a.name, password = _a.password;
                    email = email.value;
                    name = name.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post("users/register", {
                            email: email,
                            name: name,
                            password: password
                        })];
                case 2:
                    data = (_b.sent()).data;
                    result = data.result, error = data.error;
                    console.log(result);
                    console.log(name);
                    console.log(error);
                    if (error && error.includes("E11000"))
                        alert("email is already in use");
                    console.log(data);
                    e.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleLogin(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, name, password, data, user, login, error, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = e.target.elements, email = _a.email, name = _a.name, password = _a.password;
                    email = email.value;
                    name = name.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post("/users/login", {
                            email: email,
                            name: name,
                            password: password
                        })];
                case 2:
                    data = (_b.sent()).data;
                    user = data.user, login = data.login, error = data.error;
                    console.log("This is the logged in USER", user);
                    console.log("This is the logged in NAME", name);
                    console.log("This is the logged in DATA", data);
                    if (login) {
                        window.location.href = "./user.html?name=" + name;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getUserId() {
    try {
        var queryString = window.location.search;
        console.log(queryString);
        var urlParams = new URLSearchParams(queryString);
        var name = urlParams.get("name");
        console.log(name);
        return name;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function toUserPage() {
    try {
        var name = getUserId();
        var userName = document.querySelector("#userName");
        userName.innerHTML = "<h1>Welcome  " + name + "</h1>";
    }
    catch (error) {
        console.log(error);
    }
}
