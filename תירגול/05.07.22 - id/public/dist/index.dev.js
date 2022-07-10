"use strict";

// const arr = [
//     { id: 11, name: "Marina", hobbie: "Fishing" },
//     { id: 23, name: "Dorit", hobbie: "Druming" },
//     { id: 36, name: "Meir", hobbie: "Programing" }
// ]
// const user = arr.find(item => item.name == "Marina")
// console.log(user)
var root = document.querySelector('.root'); // let html = ''
// const getHobbie = (userId) => {
//     // const user = arr.find(item => item.id == userId)
//     // console.log(user.hobbie)
//     const user = arr.filter(item => item.id == userId)
//     console.log(user[0].hobbie)
// }
// arr.forEach(element =>
//     html += `
//     <div onclick="getHobbie('${element.id}')">${element.name}</div>
//     `)
// root.innerHTML = html;

var getData = function getData() {
  var _ref, data;

  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/get-index'));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          console.log(data);
          render(data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

getData();

var hendlePostData = function hendlePostData(e) {
  var _e$target$elements, name, hobbie, _ref2, data;

  return regeneratorRuntime.async(function hendlePostData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          _e$target$elements = e.target.elements, name = _e$target$elements.name, hobbie = _e$target$elements.hobbie;
          name = name.value;
          hobbie = hobbie.value;
          console.log(name, hobbie);
          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.post('/post-data', {
            name: name,
            hobbie: hobbie
          }));

        case 7:
          _ref2 = _context2.sent;
          data = _ref2.data;
          console.log(data);
          e.target.reset();

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getObj = function getObj(userId) {
  var _ref3, data;

  return regeneratorRuntime.async(function getObj$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(userId);
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.post('/get-one-user', {
            userId: userId
          }));

        case 3:
          _ref3 = _context3.sent;
          data = _ref3.data;
          console.log(data);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // root.addEventListener('click', (e) => {
// })


var render = function render(arr) {
  var html;
  arr.forEach(function (element) {
    return html += "\n            <div onclick=\"getObj('".concat(element._id, "')\">").concat(element.name, "</div>\n            ");
  });
  root.innerHTML = html;
};