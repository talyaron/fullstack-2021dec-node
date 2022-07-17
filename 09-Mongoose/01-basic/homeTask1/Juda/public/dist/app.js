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
var root = document.querySelector('#root');
function handleAddCat(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, color, age, imgUrl, _a, data, error, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.name.value;
                    color = ev.target.color.value;
                    age = ev.target.age.valueAsNumber;
                    imgUrl = ev.target.imgUrl.value;
                    if (!name || !color || !age || !imgUrl)
                        throw new Error("One of the inputs is missing");
                    return [4 /*yield*/, axios.post('/cats/addCat', { name: name, color: color, age: age, imgUrl: imgUrl })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    console.log("The cat " + name + " saved to DB");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetAllCats() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, allCats, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('press get all cats');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get('/cats/getAllCats')];
                case 2:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    allCats = data.allCats;
                    renderCats(allCats);
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
function renderCats(catsArray) {
    var html = "";
    catsArray.forEach(function (cat) {
        html += "Name: " + cat.name + " <br>\n    Color: " + cat.color + " <br>\n    Age: " + cat.age + " <br>\n   <img src=\"" + cat.imgUrl + "\" alt=\"\"> <br>";
    });
    root.innerHTML = html;
}
function handleFindCat(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var age, data, filteredCats, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('Searching');
                    ev.preventDefault();
                    age = ev.target.age.valueAsNumber;
                    if (!age)
                        throw new Error('please enter age');
                    console.log(age);
                    return [4 /*yield*/, axios.patch('/cats/findCats', { age: age })];
                case 1:
                    data = (_a.sent()).data;
                    filteredCats = data;
                    console.log(filteredCats);
                    renderCats(filteredCats);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleFindCatsExpert(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, color, age, data, filteredCats, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.name.value;
                    color = ev.target.color.value;
                    age = ev.target.age.valueAsNumber;
                    if (!name && !color && !age) {
                        throw new Error('enter at lease one parameter');
                    }
                    return [4 /*yield*/, axios.patch('/cats/findCatsExpert', ({ name: name, color: color, age: age }))];
                case 1:
                    data = (_a.sent()).data;
                    filteredCats = data;
                    renderCats(filteredCats);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
