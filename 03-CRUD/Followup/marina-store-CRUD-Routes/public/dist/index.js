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
var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
var shopIcon = document.querySelector("#cart-icon");
var times = document.querySelector("#cart-notification");
var clickTime = 0;
var timesClicked = 0;
function initStore() {
    return __awaiter(this, void 0, void 0, function () {
        var data, records, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/albums/albums-all")];
                case 1:
                    data = (_a.sent()).data;
                    records = data.records, error = data.error;
                    if (error)
                        throw new Error(error);
                    // console.log(data);
                    renderToStore(data);
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
function initErp() {
    return __awaiter(this, void 0, void 0, function () {
        var data, records, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/albums/albums-all")];
                case 1:
                    data = (_a.sent()).data;
                    records = data.records, error = data.error;
                    if (error)
                        throw new Error(error);
                    // console.log(data);
                    renderToErp(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getAllRecords() {
    return __awaiter(this, void 0, void 0, function () {
        var data, records, error, root, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/albums/albums-all")];
                case 1:
                    data = (_a.sent()).data;
                    records = data.records, error = data.error;
                    if (error)
                        throw new Error(error);
                    root = document.querySelector("#root");
                    root.style.display = "grid";
                    renderToStore(data);
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
function handleUpdateAlbum(e, id) {
    return __awaiter(this, void 0, void 0, function () {
        var name, title, type, year, raiting, url, data, records, error, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    name = e.target.elements.name.value;
                    title = e.target.elements.title.value;
                    type = e.target.elements.type.value;
                    year = e.target.elements.year.valueAsNumber;
                    raiting = e.target.elements.raiting.valueAsNumber;
                    url = e.target.elements.url.value;
                    return [4 /*yield*/, axios.put("/albums/album-update", {
                            name: name,
                            title: title,
                            type: type,
                            year: year,
                            raiting: raiting,
                            url: url,
                            id: id
                        })];
                case 2:
                    data = (_a.sent()).data;
                    records = data.records, error = data.error;
                    if (error)
                        throw new Error(error);
                    // console.log(data);
                    renderToStore(data);
                    renderToErp(data);
                    e.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddAlbum(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, title, type, year, raiting, url, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    name = e.target.elements.name.value;
                    title = e.target.elements.title.value;
                    type = e.target.elements.type.value;
                    year = e.target.elements.year.valueAsNumber;
                    raiting = e.target.elements.raiting.valueAsNumber;
                    url = e.target.elements.url.value;
                    return [4 /*yield*/, axios.post("/albums/album-add", {
                            name: name,
                            title: title,
                            type: type,
                            year: year,
                            raiting: raiting,
                            url: url
                        })];
                case 1:
                    data = (_a.sent()).data;
                    // console.log(data);
                    renderToStore(data);
                    renderToErp(data);
                    e.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSearch(e) {
    try {
        var input = e.target.value;
        // console.log(input);
        axios.get("/albums/search?input=" + input).then(function (_a) {
            var data = _a.data;
            renderToStore(data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSelectType(e) {
    e.preventDefault();
    try {
        var type = e.target.value;
        console.log(e.target.value);
        axios.get("/albums/select-type?type=" + type).then(function (_a) {
            var data = _a.data;
            renderToStore(data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteAlbum(recordID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/albums/album-delete", { recordID: recordID })];
                case 1:
                    data = (_a.sent()).data;
                    renderToStore(data);
                    renderToErp(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDoubleClick(recordID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, root, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/albums/album-clicked", { recordID: recordID })];
                case 1:
                    data = (_a.sent()).data;
                    if (clickTime === 0) {
                        clickTime = new Date().getTime();
                        // console.log(clickTime);
                    }
                    else {
                        if (new Date().getTime() - clickTime < 800) {
                            clickTime = 0;
                            // console.log(123);
                            times.textContent = ++timesClicked;
                            times.style.color = "orange";
                            shopIcon.style.color = "white";
                        }
                        else {
                            clickTime = new Date().getTime();
                        }
                        root = document.querySelector("#root");
                        root.style.display = "flex";
                        renderAddedToCart(data);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderAddedToCart(records) {
    try {
        var root = document.querySelector("#root");
        var html_1 = "";
        records.forEach(function (record) {
            html_1 += "\n                <div class=\"addedToCart\">\n                   <p style=\"color: orange;\">Just added to your cart:</p>\n                   <a href=\"" + record.url + "\">" + record.title + "</a> <br>\n                   <p>" + record.name + "</p>\n                   <img src=\"" + record.url + "\" onclick='handleDoubleClick(\"" + record.id + "\")'>\n                   <p>" + record.year + "</p> \n                   <p>" + record.type + " </p> <p style=\"color: orange;\"> " + record.raiting + "</p>                                                      \n                </div>\n                  ";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderToStore(records) {
    try {
        var root = document.querySelector("#root");
        var html_2 = "";
        records.forEach(function (record) {
            html_2 += "\n                <div class=\"card\">\n                   <a href=\"" + record.url + "\">" + record.title + "</a> <br>\n                   <p>" + record.name + "</p>\n                   <img src=\"" + record.url + "\" onclick='handleDoubleClick(\"" + record.id + "\")'>\n                   <p>" + record.year + "</p> \n                   <p>" + record.type + " </p> <p style=\"color: orange;\"> " + record.raiting + "</p>                                                      \n                </div>\n                  ";
        });
        root.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
function renderToErp(records) {
    try {
        var root = document.querySelector("#root");
        var html_3 = "";
        records.forEach(function (record) {
            html_3 += "\n                <div class=\"card\">\n                   <a href=\"" + record.url + "\">" + record.title + "</a> <br>\n                   <p>" + record.name + "</p>\n                   <img src=\"" + record.url + "\">\n                   <p>" + record.year + "</p> \n                   <p>" + record.type + "</p> \n                   <p>raiting " + record.raiting + "</p>\n                                     \n                   <form onsubmit=\"handleUpdateAlbum(event, '" + record.id + "')\">\n                   <input type=\"text\" name=\"name\" value=\"" + record.name + "\"><br>\n                   <input type=\"text\" name=\"title\" value=\"" + record.title + "\"><br>       \n                   <input type=\"number\" name=\"year\" value=\"" + record.year + "\"><br>\n                   <input type=\"number\" name=\"raiting\" value=\"" + record.raiting + "\"><br>\n                   <input type=\"text\" name=\"url\" value=\"" + record.url + "\"><br>\n                   <input type=\"text\" name=\"id\" value=\"" + record.id + "\" readonly><br>\n                      <select name=\"type\" id=\"type\"><br>\n                         <option value=\"Choose type\" disabled selected>Choose type</option>\n                         <option value=\"classic\">Classic</option>\n                         <option value=\"coolJazz\">Cool jazz</option>\n                         <option value=\"bebop\">Bebop</option>\n                         <option value=\"ethnic\">Ethnic</option>\n                     </select><br> \n                    <button class=\"button\">Update</button> \n                    <button class=\"button\" onclick='handleDeleteAlbum(\"" + record.id + "\")'>Delete</button> \n                   </form>                           \n               </div>\n                  ";
        });
        root.innerHTML = html_3;
    }
    catch (error) {
        console.error(error);
    }
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
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
    try {
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    catch (error) {
        console.log(error);
    }
}
// humburger toggle menu with animation
function handleToggle(e) {
    document.body.classList.toggle("activeNav");
}
var textService = document.querySelector(".textService");
var textAbout = document.querySelector(".textAbout");
var textContact = document.querySelector(".textContact");
var linkService = document.querySelector(".linkService");
var linkAbout = document.querySelector(".linkAbout");
var linkContact = document.querySelector(".linkContact");
textAbout.style.display = "none";
textContact.style.display = "none";
textService.style.display = "none";
linkService.addEventListener("click", function () {
    textAbout.style.display = "none";
    textContact.style.display = "none";
    textService.style.display = "block";
    document.querySelector(".textService").innerHTML = document
        .querySelector(".textService")
        .textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textService span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
linkAbout.addEventListener("click", function () {
    textAbout.style.display = "block";
    textContact.style.display = "none";
    textService.style.display = "none";
    document.querySelector(".textAbout").innerHTML = document
        .querySelector(".textAbout")
        .textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textAbout span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
linkContact.addEventListener("click", function () {
    textAbout.style.display = "none";
    textContact.style.display = "block";
    textService.style.display = "none";
    document.querySelector(".textContact").innerHTML = document
        .querySelector(".textContact")
        .textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textContact span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
// social counter
var counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
    counter.innerText = "0";
    counter.style.color = "rgba(248, 244, 244, 0.509)";
    var updateCounter = function () {
        var target = +counter.getAttribute("data-target");
        var c = +counter.innerText;
        var increment = target / 1500;
        if (c < target) {
            counter.innerText = "" + Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
// clock
var clock = document.querySelector(".clock");
var tick = function () {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    // console.log(h, m, s);
    var html = "\n    <span>" + h + "</span> :\n    <span>" + m + "</span> :\n    <span>" + s + "</span>\n  ";
    clock.innerHTML = html;
};
setInterval(tick, 1000);
