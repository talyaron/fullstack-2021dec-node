"use strict";
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
exports.__esModule = true;
function getUserId() {
    try {
        var queryString = window.location.search;
        console.log(queryString);
        var urlParams = new URLSearchParams(queryString);
        var userId = urlParams.get("userId");
        console.log(userId);
        return userId;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function getUserItems() {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, items, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = getUserId();
                    return [4 /*yield*/, axios.get("/items/get-items?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    items = data.items, error = data.error;
                    console.log(items);
                    renderItems(items);
                    if (error)
                        throw new Error("Items was not found!");
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
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, user, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = getUserId();
                    return [4 /*yield*/, axios.post("/users/get-user", { userId: userId })];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    console.log(user);
                    renderUser(user);
                    if (error)
                        throw new Error("Could not get users");
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
function renderItems(items) {
    console.log(items);
    var rootList = document.querySelector("#rootList");
    var html = "";
    items.forEach(function (item) {
        var newItem = document.createElement("div");
        html += "<div class=\"screen__card-wrapper \">\n    <h4 class=\"screen__title-h4 \">" + item.name + "</h4>\n    <div class=\"screen__card-wrapper__actions \">\n        <img class=\"screen__card-wrapper__actions__icon \" src=\" ./icons/pencil.svg \" alt=\"edit \">\n        <img class=\"screen__card-wrapper__actions__icon \" src=\"./icons/trash.svg \" alt=\"delete \">\n    </div>\n</div>";
        rootList.innerHTML = html;
    });
    // wraper.innerHTML += `<button onclick="handleAddItem()">handleAddItem---${items[0].userId}-----------</button>`;
}
function handleRenderItems() {
    renderItems(items);
}
function handleDeleteItem(itemId, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, items, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("delete item clicked");
                    return [4 /*yield*/, axios["delete"]("/items/delete-item", {
                            data: { itemId: itemId, userId: userId }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    items = data.items, error = data.error;
                    renderItems(items.filter(function (item) { return item.userId === userId; }));
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
function renderUser(user) {
    var userNameTitle = document.querySelector("#userTitle");
    userNameTitle.innerHTML = user.name + "'s grocery list:";
}
function handleAddItem() {
    return __awaiter(this, void 0, void 0, function () {
        var newItem, newItemValue, userId, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newItem = document.querySelector("#inputNewItem");
                    newItemValue = newItem.value;
                    console.log(newItemValue);
                    userId = getUserId();
                    return [4 /*yield*/, axios.post("/items/addItem", {
                            newItemValue: newItemValue,
                            userId: userId
                        })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderItems(data.items);
                    if (!Array.isArray(data.items))
                        throw new Error("data should be an array ant it is not");
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
/////// Search items
var form = document.querySelector("#searchForm");
function handleSearchItems(event) {
    return __awaiter(this, void 0, void 0, function () {
        var searchedItem, filterBy, data, result, resultContainer, html_1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    searchedItem = event.target.search.value;
                    filterBy = event.target.filteroption.value;
                    return [4 /*yield*/, axios.post("/items/searchItems", {
                            searchedItem: searchedItem,
                            filterBy: filterBy
                        })];
                case 1:
                    data = (_a.sent()).data;
                    result = data;
                    resultContainer = document.querySelector(".resultcontainer");
                    html_1 = "<h2>" + result.length + " results found</h2>";
                    result.forEach(function (item) {
                        html_1 += "<p>Item: " + item.name + "</p>";
                    });
                    resultContainer.innerHTML = html_1;
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
function handleGetItems() {
    return __awaiter(this, void 0, void 0, function () {
        var data, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/items/getAllItems")];
                case 1:
                    data = (_a.sent()).data;
                    items = data;
                    return [2 /*return*/];
            }
        });
    });
}
function handleLoad() {
    try {
        getUserItems();
        getUser();
    }
    catch (error) {
        console.error(error);
    }
}
