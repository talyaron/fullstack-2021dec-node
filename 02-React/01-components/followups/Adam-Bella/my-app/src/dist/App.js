"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./design/styleGuides/app.scss");
var Card_1 = require("./design/components/cards/Card");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("div", { className: "btn" }, "OK"),
            react_1["default"].createElement(Card_1["default"], { heading: 'a', tag: 'This is a tag' }),
            react_1["default"].createElement(Card_1["default"], { heading: 'b', tag: 'This is a tag 2' }),
            react_1["default"].createElement(Card_1["default"], { heading: 'c', tag: 'This is a tag 3' }),
            react_1["default"].createElement(Card_1["default"], { heading: 'd', tag: 'This is a tag' }),
            react_1["default"].createElement(Card_1["default"], { heading: 'e', tag: 'This is a tag' }),
            react_1["default"].createElement("button", null, "OK2"))));
}
exports["default"] = App;
