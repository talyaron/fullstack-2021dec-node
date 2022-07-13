"use strict";

var _require = require('../model'),
    findById = _require.findById;

var Index = require('../model');

exports.getIndex = function _callee(req, res) {
  var index;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Index.find());

        case 2:
          index = _context.sent;
          // console.log(index[2]._id)
          // res.send(index[2]._id)
          res.send(index);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.postData = function _callee2(req, res) {
  var _req$body, name, hobbie, user;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, hobbie = _req$body.hobbie;
          console.log(name, hobbie);
          user = new Index({
            name: name,
            hobbie: hobbie
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(user.save());

        case 5:
          res.send({
            ok: true,
            user: user
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getOneUser = function _callee3(req, res) {
  var userId;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.body.userId;
          console.log(userId); // const user = await Index.findById(userId)

          console.log(user);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};