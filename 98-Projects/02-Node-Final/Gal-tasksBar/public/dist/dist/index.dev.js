"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
;

function handleAddUser(ev) {
  return __awaiter(this, void 0, void 0, function () {
    var elements, userName, email, password;
    return __generator(this, function (_a) {
      try {
        ev.preventDefault();
        elements = ev.target.elements;
        userName = elements.userName.value;
        email = elements.email.value;
        password = elements.permissions.value;
        console.log(userName, email, password);
        if (!userName || !email || !password) throw new Error("Details are required"); // const {
        //     data
        //      // @ts-ignore
        // } = await axios.post('/api/add-user', {
        //     userName,
        //     email,
        //     password
        // });
        // const {
        //     users,
        //     error
        // } = data;
        // if (error)
        //     throw new Error(error);
        // renderUsers(users);
      } catch (error) {
        console.error(error);
      }

      return [2
      /*return*/
      ];
    });
  });
}

;

function renderUsers(users) {
  var renderUsers = document.querySelector("#usersTasks");
}

function handleLoad() {
  try {
    getUserByCookie();
  } catch (error) {
    console.error(error);
  }
}

function handleDelete(event) {
  return __awaiter(this, void 0, void 0, function () {
    var userId, data, users, error, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          console.log("delete button pressed");
          userId = event.target.id;
          return [4
          /*yield*/
          , axios["delete"]("/users/add-user", {
            data: _defineProperty({
              userId: userId
            }, "userId", userId)
          })];

        case 1:
          data = _a.sent().data;
          users = data.users, error = data.error;
          renderUsers(users);
          return [3
          /*break*/
          , 3];

        case 2:
          error_1 = _a.sent();
          console.error(error_1);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
} // async function handleRegister(ev) {
//     ev.preventDefault();
//     let { email, password } = ev.target.elements;
//     email = email.value;
//     password = password.value;
//     console.log(email, password)
//     //@ts-ignore
//     const { data } = await axios.post("/users/add-user", { email, password });
//     console.log(data);
// }


function handleLogin(ev) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, username, password, data, user, usernameDB, root, error_2;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2,, 3]);

          ev.preventDefault();
          _a = ev.target.elements, username = _a.username, password = _a.password;
          username = username.value;
          password = password.value;
          return [4
          /*yield*/
          , axios.post("/users/login", {
            username: username,
            password: password
          })];

        case 1:
          data = _b.sent().data;
          console.log(data);
          user = data.user; // window.location.href = './main.html';

          if (!user) {
            throw new Error('User not found');
          }

          usernameDB = user.username;
          root = document.getElementById('root');

          if (root) {
            root.innerHTML = "<h1>Welcome " + usernameDB + "</h1>";
          }

          return [3
          /*break*/
          , 3];

        case 2:
          error_2 = _b.sent();
          console.error(error_2);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function getUserByCookie() {
  return __awaiter(this, void 0, void 0, function () {
    var data, user, usernameDB, root, error_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , axios.get("/users/get-user")];

        case 1:
          data = _a.sent().data;
          console.log(data);
          user = data.user;

          if (!user) {
            throw new Error('User not found');
          }

          usernameDB = user.username;
          root = document.getElementById('root');

          if (root) {
            root.innerHTML = "<h1>Welcome " + usernameDB + "</h1>";
          }

          return [3
          /*break*/
          , 3];

        case 2:
          error_3 = _a.sent();
          console.error(error_3);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function handleGetUsers() {
  return __awaiter(this, void 0, void 0, function () {
    var data, users;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , axios.get('/users/get-users')];

        case 1:
          data = _a.sent().data;
          console.log(data);
          users = data.users;
          console.log(users);

          if (users) {
            renderUsers(users);
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

function handleSearchItems(event) {
  return __awaiter(this, void 0, void 0, function () {
    var data, filtereditems, error_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          event.preventDefault();
          return [4
          /*yield*/
          , axios.post('/items/searchItems', {})];

        case 1:
          data = _a.sent().data;
          filtereditems = data;
          return [3
          /*break*/
          , 3];

        case 2:
          error_4 = _a.sent();
          console.error(error_4);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function userPage() {
  var usersTasks = document.querySelector("#usersTasks");
  var html = "";
  html += "\n    <div></div>\n    ";
  usersTasks.innerHTML = html;
  console.log(userPage);
}