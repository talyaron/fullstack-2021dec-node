var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
$(window).on("hashchange", function () {
    if (location.hash.slice(1) == "signup") {
        $(".page").addClass("extend");
        $("#login").removeClass("active");
        $("#signup").addClass("active");
    }
    else {
        $(".page").removeClass("extend");
        $("#login").addClass("active");
        $("#signup").removeClass("active");
    }
});
$(window).trigger("hashchange");
// async function handleAddUser(e) {
//   try {
//     e.preventDefault();
//     const name = e.target.elements.name.value;
//     console.log(name);
//     // @ts-ignore
//     const { data } = await axios.post("/users/user-add", { name });
//     renderUsers(data);
//     if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
//     e.target.reset();
//   } catch (error) {
//     console.error(error);
//   }
// }
function validateLoginForm(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, password, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    password = ev.target.elements.password.value;
                    console.log(name, password);
                    return [4 /*yield*/, axios.post("/users/login", { name: name, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function validateSignupForm(ev) {
    try {
        ev.preventDefault();
        var elements = ev.target.elements;
        var email = elements.email.value;
        var name = elements.name.value;
        var password = elements.password.value;
        console.log(name, email, password);
        // @ts-ignore
        var data = (yield axios.post("/users/sign-up", { name: name, email: email, password: password })).data;
        if (!Array.isArray(data))
            throw new Error("data should be an array and it is not");
        // throwError(data)
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
;
// function throwError(UserValidate: any) {
//     if ( UserValidate.email == "" || UserValidate.name == "" || UserValidate.password == "") {
//       document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//       return false;
//     } else if (UserValidate.password.length < 8) {
//       document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
//       return false;
//     } else {
//       alert("Successfully signed up");
//       return true;
//     }
// };
// / Anonymous "self-invoking" function
// (function() {
//     const startingTime = new Date().getTime();
//     // Load the script
//     const script: any = document.createElement("SCRIPT");
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
//     script.type = 'text/javascript';
//     document.getElementsByTagName("head")[0].appendChild(script);
//     // Poll for jQuery to come into existance
//     const checkReady = function(callback) {
//             window.setTimeout(function() { checkReady(callback); }, 20);
//     };
//     // Start polling...
//     checkReady(function($) {
//         $(function() {
//             const endingTime = new Date().getTime();
//             const tookTime = endingTime - startingTime;
//             window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
//         });
//     });
//   });
// export const throwError = async (req, res) => {
//   try {
//     if (email == "" || name == "" || password == "") {
//       document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//       return false;
//     } else if (password.length < 8) {
//       document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
//       return false;
//     } else {
//       alert("Successfully signed up");
//       return true;
//     }
//   } catch (error) {
//     res.send({ error: error.message });
//   }
// };
// // sign up
// if (email == "" || name == "" || password == "") {
//   document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//   return false;
// } else if (password.length < 8) {
//   document.querySelector("#errorMsg").innerHTML = "Your password must include atleast 8 characters"
//   return false;
// } else {
//   alert("Successfully signed up");
//   return true;
// }
// // login
// if (name == "" || password == "") {
//   document.querySelector("#errorMsg").innerHTML = "Please fill the required fields"
//   return false;
// } else if (password.length < 8) {
//   document.querySelector("#errorMsg").innerHTML = "Your password must include at least 8 characters"
//   return false;
// } else {
//   alert("Successfully logged in");
//   return true;
// }
// function goToLogin(userSigned) {
//       location.href = "./login.html";
//       console.log(userSigned);
//   };
// html += `<div class="screen__card-wrapper" id="${user.userId}">
// <h3 class="screen__title-h3__white">${user.name}</h3>
// <div class="screen__card-wrapper__actions">
//     <img onclick="handleUpdateUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg " alt="edit ">
//     <img onclick="handleDeleteUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg " alt="delete ">
// </div>
// </div>`;
//   const root = document.querySelector('#root')
// root.innerHTML = html;
// }
