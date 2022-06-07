"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
;
exports.default = uid;
