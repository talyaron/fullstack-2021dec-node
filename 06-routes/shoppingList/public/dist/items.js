"use strict";
exports.__esModule = true;
;
function handleGetUser() {
    var queryString = window.location.search;
    console.log(queryString);
    var urlParams = new URLSearchParams(queryString);
    var userId = urlParams.get('userId');
    console.log(userId);
}