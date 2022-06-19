"use strict";
//have to copy functions for uid to from public to helpers for server use
exports.__esModule = true;
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
;
exports["default"] = uid;
