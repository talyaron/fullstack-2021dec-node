"use strict";
exports.__esModule = true;
exports.randomNumber = void 0;
function uid() {
    try {
        retutn;
        "id" + Math.random().toString(16).slice(2);
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
exports["default"] = uid;
