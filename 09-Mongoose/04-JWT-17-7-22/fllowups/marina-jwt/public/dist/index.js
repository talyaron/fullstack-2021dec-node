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
var video = document.querySelector("#video");
var videoPouseBtn = document.querySelector("#videoPouseBtn");
function handleRegister(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, password, data, error, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, name = _a.name, email = _a.email, password = _a.password;
                    name = name.value;
                    email = email.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post('/users/register', { name: name, email: email, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    error = data.error, user = data.user;
                    // if(error) throw error;
                    console.log(user);
                    // e.target.reset();
                    if (error) {
                        alert("Couldn`t register user");
                    }
                    else {
                        window.location.href = "./user.html";
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleLogin(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, data, error, user, entrances, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, email = _a.email, password = _a.password;
                    email = email.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post('/users/login', { email: email, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    error = data.error, user = data.user, entrances = data.entrances;
                    console.log('This is the user from handleLogin:', user);
                    console.log("This is the Data from handleLogin:", data);
                    // e.target.rest();
                    if (!user) {
                        alert("Username or password is incorrect");
                    }
                    else {
                        window.location.href = "./user.html";
                    }
                    if (error && error.includes('E11000'))
                        alert('This email is already in use');
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getUserByCookie() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, decodedCookie, name, welcomeRoot, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/users/user-by-cookie')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, decodedCookie = data.decodedCookie;
                    if (!user)
                        throw new Error('User not found');
                    console.log("This user from getUserByCookie:", user);
                    name = user.name;
                    console.log("name is:", name);
                    console.log("decodedCookie is:", decodedCookie);
                    welcomeRoot = document.querySelector("#welcomeRoot");
                    welcomeRoot.innerHTML = "<h1>Wellcome, " + decodedCookie.name + "!</h1>";
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function videoBackground() {
    if (video.paused) {
        video.play();
        videoPouseBtn.innerHTML = "Pause";
    }
    else {
        video.pause();
        videoPouseBtn.innerHTML = "Play";
    }
}
