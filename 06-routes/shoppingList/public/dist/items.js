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
        var urlParams = new URLSearchParams(queryString);
        var userId = urlParams.get('userId');
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
                    renderItems(items);
                    if (error)
                        throw new Error('Items was not found!');
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
                    return [4 /*yield*/, axios.post('/users/get-user', { userId: userId })];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error('Could not get users');
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
    var rootList = document.querySelector('#rootList');
    var html = '';
    items.forEach(function (item) {
        var newItem = document.createElement('div');
        html += "<div class=\"screen__card-wrapper \">\n    <h4 class=\"screen__title-h4 \">" + item.name + "</h4>\n    <div class=\"screen__card-wrapper__actions \">\n        <img id=\"" + item.itemId + "\" class=\"screen__card-wrapper__actions__icon\" src=\"./icons/trash.svg \" alt=\"delete\" onclick=\"handleDeleteItem(event)\">\n        <label class=\"checkbox\">\n    <input type=\"checkbox\" />\n    <svg viewBox=\"0 0 21 18\">\n        <symbol id=\"tick-path\" viewBox=\"0 0 21 18\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69\" fill=\"none\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n        </symbol>\n        <defs>\n            <mask id=\"tick\">\n                <use class=\"tick mask\" href=\"#tick-path\" />\n            </mask>\n        </defs>\n        <use class=\"tick\" href=\"#tick-path\" stroke=\"currentColor\" />\n        <path fill=\"white\" mask=\"url(#tick)\" d=\"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z\" />\n    </svg>\n    <svg class=\"lines\" viewBox=\"0 0 11 11\">\n        <path d=\"M5.88086 5.89441L9.53504 4.26746\" />\n        <path d=\"M5.5274 8.78838L9.45391 9.55161\" />\n        <path d=\"M3.49371 4.22065L5.55387 0.79198\" />\n    </svg>\n</label>\n        </div>\n</div>";
    });
    rootList.innerHTML = html;
    // wraper.innerHTML += `<button onclick="handleAddItem()">handleAddItem---${items[0].userId}-----------</button>`;
}
function handleRenderItems() {
    renderItems(items);
}
// itemId: string, userId: string
function handleDeleteItem(event) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, itemId, data, items, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = getUserId();
                    itemId = event.target.id;
                    return [4 /*yield*/, axios["delete"]('/items/delete-item', {
                            data: { itemId: itemId, userId: userId }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    items = data.items;
                    renderItems(items);
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
    var userNameTitle = document.querySelector('#userTitle');
    userNameTitle.innerHTML = user.name + "'s grocery list:";
}
function handleAddItem(event) {
    return __awaiter(this, void 0, void 0, function () {
        var itemToAdd, userId, data, items, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    itemToAdd = event.target.addItem.value;
                    userId = getUserId();
                    return [4 /*yield*/, axios.post('/items/addItem', {
                            itemToAdd: itemToAdd,
                            userId: userId
                        })];
                case 1:
                    data = (_a.sent()).data;
                    items = data.items;
                    renderItems(items);
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
var form = document.querySelector('#searchForm');
function handleSearchItems(event) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, searchedItem, filterBy, data, filtereditems, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    userId = getUserId();
                    searchedItem = event.target.search.value;
                    filterBy = event.target.filteroption.value;
                    return [4 /*yield*/, axios.post('/items/searchItems', {
                            searchedItem: searchedItem,
                            filterBy: filterBy,
                            userId: userId
                        })];
                case 1:
                    data = (_a.sent()).data;
                    filtereditems = data;
                    renderItems(filtereditems);
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
                case 0: return [4 /*yield*/, axios.get('/items/getAllItems')];
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
