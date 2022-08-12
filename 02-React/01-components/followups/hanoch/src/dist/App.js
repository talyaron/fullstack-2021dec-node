"use strict";
exports.__esModule = true;
require("./view/components/cards/styles/app.scss");
var Card_1 = require("./view/components/cards/Card");
require("./App.css");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("div", { className: "card1" },
                React.createElement("div", { className: 'text' },
                    React.createElement(Card_1["default"], { text: 'flower' }))))));
}
exports["default"] = App;
