"use strict";
//have to copy functions for uid from helpers to public for client use
exports.__esModule = true;
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
;
exports["default"] = uid;
