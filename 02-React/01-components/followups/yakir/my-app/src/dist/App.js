"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
var Card_1 = require("./view/components/card/Card");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("div", { className: "wrapper" },
                react_1["default"].createElement(Card_1["default"], { src: "https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg" }),
                react_1["default"].createElement(Card_1["default"], { src: "https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg" }),
                react_1["default"].createElement(Card_1["default"], { src: "https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg" }),
                react_1["default"].createElement(Card_1["default"], { src: "https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg" })))));
}
exports["default"] = App;
