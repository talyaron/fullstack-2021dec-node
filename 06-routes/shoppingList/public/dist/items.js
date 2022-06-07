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
exports.renderItems = exports.getUserItems = exports.getUserId = void 0;
var itemsCont_1 = require("../cont/itemsCont");
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
exports.getUserId = getUserId;
function getUserItems() {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, items_1, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = getUserId();
                    return [4 /*yield*/, axios.get("/items/get-items?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    items_1 = data.items, error = data.error;
                    renderItems(items_1);
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
exports.getUserItems = getUserItems;
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userId_1, data, users, error, findUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId_1 = getUserId();
                    return [4 /*yield*/, axios.get('/users/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    findUser = users.find(function (user) { return user.userId === userId_1; });
                    console.log(findUser);
                    renderUserCart(findUser);
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
function handleDeleteItem(itemId, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, items_2, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('delete item clicked');
                    return [4 /*yield*/, axios["delete"]("/items/delete-item", { data: { itemId: itemId, userId: userId } })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    items_2 = data.items, error = data.error;
                    renderItems(items_2.filter(function (item) { return item.userId === userId; }));
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
function renderItems(ArrayofItems) {
    var wraper = document.querySelector(".wraper");
    wraper.innerHTML = '';
    ArrayofItems.forEach(function (item) {
        var newItem = document.createElement("div");
        newItem.innerHTML = " <div>\n         <h4 style=\"display: inline;\">" + item.name + "</h4>\n         <input type=\"checkbox\">\n         <button>edit</button>\n         <button onclick=\"handleDeleteItem('" + item.itemId + "', '" + item.userId + "')\">delete</button>\n     </div>";
        wraper.appendChild(newItem);
    });
    // wraper.innerHTML += `<button onclick="handleAddItem()">handleAddItem---${items[0].userId}-----------</button>`;
}
exports.renderItems = renderItems;
function handleRenderItems() {
    renderItems(itemsCont_1.items);
}
function renderUserCart(user) {
    var userNameTitle = document.querySelector('#userCart');
    userNameTitle.innerHTML = user.name + "'s Shopping Cart";
}
function handleLoadUserInfo() {
    getUser();
    getUserItems();
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
                    return [4 /*yield*/, axios.post("/items/addItem", { newItemValue: newItemValue, userId: userId })];
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
// export function handleAddItem() {
//   //@ts-ignore
//   // const { data } = await axios.get("/items/add-items");
//   // const { items, error } = data;
//   let newItem = document.getElementById("newItemInput") as HTMLInputElement;
//   // console.log(items)
//   let newItemValue = newItem.value;
//   console.log(newItem.value);
//   const newItemWrapper = document.querySelector(".newItemWrapper");
//   // newItemWrapper.innerHTML = "";
//   // ArrayofNewItems.forEach((newItems) => {
//   const newAddedItem:any = document.createElement("div");
//   newAddedItem.innerHTML += `<div>
//          <h4 style="display: inline;">${newItemValue}</h4>
//          <input type="checkbox">
//          <button>edit</button>
//    </div>`;
//   newItemWrapper.appendChild(newAddedItem);
//  }
