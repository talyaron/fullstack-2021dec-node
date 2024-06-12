"use strict";
exports.__esModule = true;
exports.getDayName = void 0;
function getDayName(dateStr) {
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: 'long' });
}
exports.getDayName = getDayName;
