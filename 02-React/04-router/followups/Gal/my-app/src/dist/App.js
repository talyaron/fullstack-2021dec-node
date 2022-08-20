"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Home_1 = require("./view/Pages/home/Home");
var About_1 = require("./view/Pages/about/About");
var Main_1 = require("./view/Pages/main/Main");
var Profile_1 = require("./view/Pages/profile/Profile");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/About", element: React.createElement(About_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profile", element: React.createElement(Profile_1["default"], null) }))));
}
exports["default"] = App;
