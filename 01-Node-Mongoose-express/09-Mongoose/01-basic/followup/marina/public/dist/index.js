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
function getPaintings() {
    return __awaiter(this, void 0, void 0, function () {
        var data, ok, paintings, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/art/painting-get")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    ok = data.ok, paintings = data.paintings;
                    console.log({ ok: ok, paintings: paintings });
                    if (paintings) {
                        renderPainting(paintings);
                    }
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
function handleAddAPainting(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, artist, title, year, technic, url, data, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, artist = _a.artist, title = _a.title, year = _a.year, technic = _a.technic, url = _a.url;
                    artist = artist.value;
                    title = title.value;
                    year = year.valueAsNumber;
                    technic = technic.value;
                    url = url.value;
                    console.log(artist, title, year, technic, url);
                    document.querySelector("form").reset();
                    return [4 /*yield*/, axios.post("/art/painting-add", {
                            artist: artist,
                            title: title,
                            year: year,
                            technic: technic,
                            url: url
                        })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
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
function handleUpdateTitle(e, paintingID) {
    return __awaiter(this, void 0, void 0, function () {
        var title, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    console.log(e, paintingID);
                    title = e.target.value;
                    return [4 /*yield*/, axios.patch("/art/painting-update", { paintingID: paintingID, title: title })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
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
function handleDelete(paintingID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]('/art/painting-delete', { data: { paintingID: paintingID } })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSelectTechnic(e) {
    return __awaiter(this, void 0, void 0, function () {
        var technic, data, paintiselectOil, selectCharcoalng, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    technic = e.target.value;
                    console.log(technic);
                    return [4 /*yield*/, axios.get("/art/painting-by-technic?technic=" + technic)];
                case 1:
                    data = (_a.sent()).data;
                    paintiselectOil = data.paintiselectOil, selectCharcoalng = data.selectCharcoalng;
                    renderPainting(data);
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderPainting(paintings) {
    var root = document.querySelector("#root");
    var html = "";
    paintings.forEach(function (painting) {
        html += "\n            <div class=\"card-conteiner\">\n                <div class='card'>\n                    <p class=\"title\">" + painting.artist + "</p>\n                    <p class=\"title\">" + painting.title + "</p>\n                    <img src=\"" + painting.url + "\">\n                    <p><span id=\"year\">" + painting.year + "</span></p>                                     \n                </div>\n                <input type=\"text\" value=\"" + painting.title + "\" onblur=\"handleUpdateTitle(event, '" + painting._id + "')\">\n                <button onclick=\"handleDelete('" + painting._id + "')\">Hide</button>\n            </div>               \n               ";
    });
    root.innerHTML = html;
}
document.querySelector("#scrollToTopBtn").addEventListener("click", function () {
    try {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    catch (error) {
        console.error(error);
    }
});
