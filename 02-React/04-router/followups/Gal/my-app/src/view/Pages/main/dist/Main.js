"use strict";
exports.__esModule = true;
var Nav_1 = require("../../nav/Nav");
var react_router_dom_1 = require("react-router-dom");
function Main() {
    return (React.createElement("div", null,
        React.createElement(Nav_1["default"], null),
        React.createElement(react_router_dom_1.Outlet, null)));
}
exports["default"] = Main;
