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
var slider = document.querySelector("#item-slider");
var currentValue = document.querySelector("#current-value");
function handleLoad() {
    try {
        // let e;
        getProduct();
        // handleRange(e);
    }
    catch (error) {
        console.error(error);
    }
}
function getProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var data, item, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/items/get-item")];
                case 1:
                    data = (_a.sent()).data;
                    item = data.item, user = data.user;
                    console.log(data);
                    console.log(user);
                    renderItem(item);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddItem(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, year, url, data, item, error, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, title = _a.title, year = _a.year, url = _a.url;
                    title = title.value;
                    year = year.value;
                    url = url.value;
                    return [4 /*yield*/, axios.post("/items/add", { title: title, year: year, url: url })];
                case 1:
                    data = (_b.sent()).data;
                    item = data.item, error = data.error;
                    if (error)
                        throw new Error(error);
                    console.log(item);
                    // e.target.reset();
                    renderItem(item);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleRange(e) {
    return __awaiter(this, void 0, void 0, function () {
        var year, data, year1980, year1981, year1982, year1983, yearDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    year = e.target.value;
                    console.log(year);
                    currentValue.innerText = year;
                    return [4 /*yield*/, axios.get("/items/range-by-year?year=" + year)];
                case 1:
                    data = (_a.sent()).data;
                    year1980 = data.year1980, year1981 = data.year1981, year1982 = data.year1982, year1983 = data.year1983, yearDB = data.yearDB;
                    console.log(year1980);
                    console.log(year1983);
                    console.log(year1981);
                    console.log(year1982);
                    console.log(year1983);
                    // console.log(yearDB);
                    // renderItem(year1980);
                    // renderItem(year1981);
                    // renderItem(year1982);
                    // renderItem(year1983);
                    // renderItem(yearDB);
                    if (1980) {
                        renderItem(year1980);
                    }
                    else if (1981) {
                        renderItem(year1981);
                    }
                    else if (1982) {
                        renderItem(year1982);
                    }
                    else if (1983) {
                        renderItem(year1983);
                    }
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
function renderItem(item) {
    try {
        var root = document.querySelector("#root");
        var html_1 = "";
        item.forEach(function (element) {
            html_1 += "\n            <div class=\"card-container\">\n                <div class='card'>\n                    <p class=\"title\">" + element.title + "</p>\n                    <img src=\"" + element.url + "\">\n                    <p><span id=\"year\">" + element.year + "</span></p>                                     \n                </div>\n            </div>               \n               ";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
// slider.addEventListener("input", async (e) => {
//   try {
//     const year: any = e.target.value;
//     currentValue.innerText = year;
//     console.log(year);
//     if (year) {
//       const { data } = await axios.get(`/items/range-by-year?year=${year}`);
//       const { year1980, year1981, year1982, year1983, yearDB } = data;
//       renderItem(data);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
// async function update() {
//   try {
//     const { data } = await axios.post("/items/update-one");
//     console.log(data);
//     renderItem(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
