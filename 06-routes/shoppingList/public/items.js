"use strict";
exports.__esModule = true;
exports.renderItems = void 0;
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
function handleGetUser() {
    var userId = getUserId();
    if (userId) {
        //axios
    }
}
function getUserItems() {
    try {
        var userId = getUserId();
        if (userId) {
            //axios
            //render
        }
        else {
            throw new Error("No user Id");
        }
    }
    catch (error) { }
}
function renderItems(ArrayofItems) {
    var wraper = document.querySelector(".wraper");
    ArrayofItems.forEach(function (element) {
        var newItem = document.createElement("div");
        newItem.innerHTML = " <div>\n         <H4>" + element.name + "</H4>\n         <input type=\"checkbox\">\n         <button>edit</button>\n         <button>delete</button>\n     </div>";
        wraper.appendChild(newItem);
    });
}
exports.renderItems = renderItems;
