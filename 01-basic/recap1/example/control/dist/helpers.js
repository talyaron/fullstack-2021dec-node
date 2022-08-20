"use strict";
exports.__esModule = true;
exports.x = exports.randomNumber = void 0;
function uid() {
    try {
        return "id-" + Math.random().toString(16).slice(2);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function randomNumber(maxNumber) {
    try {
        return Math.random() * maxNumber;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.randomNumber = randomNumber;
exports.x = 42;
exports["default"] = uid;
