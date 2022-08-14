"use strict";

var axios = require("axios");

function getJoke() {
  var _ref, data;

  return regeneratorRuntime.async(function getJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("https://api.chucknorris.io/jokes/random"));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          console.log(data.value);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

getJoke();