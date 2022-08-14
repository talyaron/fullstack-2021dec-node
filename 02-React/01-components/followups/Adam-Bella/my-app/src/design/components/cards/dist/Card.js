"use strict";
exports.__esModule = true;
var Card = function (_a) {
    var heading = _a.heading, tag = _a.tag;
    return (React.createElement("div", { className: 'card' },
        heading,
        " ",
        React.createElement("span", { className: 'tag' }, tag)));
};
exports["default"] = Card;
