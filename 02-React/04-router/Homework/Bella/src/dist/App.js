"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
// import your route components too
require("charts.css");
var Main_1 = require("./view/pages/main/Main");
var dashboard_1 = require("./view/pages/dashboard/dashboard");
var analytics_1 = require("./view/pages/analytics/analytics");
var products_1 = require("./view/pages/products/products");
var _404_1 = require("./view/pages/404/404");
require("./App.css");
var App = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(_404_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(dashboard_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: 'analytics', element: React.createElement(analytics_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "products", element: React.createElement(products_1["default"], null) })))));
};
exports["default"] = App;
