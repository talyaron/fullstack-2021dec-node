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
function handleCats(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var image, name, age, color, data, allCats, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    image = ev.target.image.value;
                    name = ev.target.name.value;
                    age = ev.target.age.value;
                    color = ev.target.color.value;
                    return [4 /*yield*/, axios.post('/cat/catsList', { image: image, name: name, age: age, color: color })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    allCats = data.allCats, error = data.error;
                    if (error)
                        throw new error;
                    console.log(allCats);
                    renderCats(allCats);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getCats() {
    return __awaiter(this, void 0, void 0, function () {
        var data, cats, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/cat/catsList')];
                case 1:
                    data = (_a.sent()).data;
                    cats = data.cats;
                    renderCats(cats);
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
var html = "";
function renderCats(catsArray) {
    try {
        var renderCats_1 = document.querySelector('#renderCats');
        // if (!Array.isArray(catsArray)) throw new Error("cats is not an array");
        catsArray.forEach(function (cat) {
            html += "<p> <img src=\"" + cat.image + "\" id=\"img\"> name: " + cat.name + " age: " + cat.age + " color: " + cat.color + "</p>";
        });
        renderCats_1.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
function handleSearch(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var age, data, searchCats, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    age = ev.target.age.value;
                    return [4 /*yield*/, axios.get("/cat/searchCats?age=" + age)];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    searchCats = data.searchCats;
                    console.log(searchCats);
                    renderCats(searchCats);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
