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
function handleGetRecipe() {
    console.log("handleGetRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n    <form onsubmit=\"GetRecipe(event)\">\n    <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\">\n    <button type=\"submit\">Get Recipe</button>\n    </form>\n    </div>";
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "relative";
    root.style.top = "10px";
    root.style.left = "10px";
}
function GetRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var recipeName, data, recipe, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getRecipe");
                    event.preventDefault();
                    recipeName = event.target.elements.recipeName.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("" + recipeName);
                    return [4 /*yield*/, axios.put('/api/get-recipe', { recipeName: recipeName })];
                case 2:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    recipe = data.recipe, error = data.error;
                    console.log(recipe);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(recipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddRepipe() {
    console.log("handleAddRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n        <form onsubmit=\"PostRecipe(event)\">\n            <input type=\"text\" name=\"name\" placeholder=\"Recipe Name\"><br>";
    html += "        \n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>\n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>\n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>\n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>\n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>\n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>";
    html += "\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>\n            <input type=\"text\" name=\"array2[]\" placeholder=\"Prepare Mode\"/><br>";
    html += "\n            <input type=\"text\" name=\"adderName\" placeholder=\"name of adder\"/>\n            <button type=\"submit\">Post Recipe</button>        \n            </form>\n    </div>";
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "relative";
    root.style.top = "10px";
    root.style.left = "10px";
}
function PostRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, ingredients, i, prepareMode, i, adderName, myRecipe, data, myRecipe_1, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("PostRecipe");
                    console.dir(event);
                    event.preventDefault();
                    name = event.target.elements.name.value;
                    console.log(name);
                    console.dir(event.target.elements[0].value);
                    ingredients = [];
                    for (i = 1; i < 7; i++) {
                        if (event.target.elements[i].value !== "") {
                            ingredients.push(event.target.elements[i].value);
                        }
                    }
                    console.log(ingredients);
                    prepareMode = [];
                    for (i = 7; i < 13; i++) {
                        if (event.target.elements[i].value !== "") {
                            prepareMode.push(event.target.elements[i].value);
                        }
                    }
                    console.log(prepareMode);
                    adderName = event.target.elements.adderName.value;
                    myRecipe = { name: name, ingredients: ingredients, prepareMode: prepareMode, adderName: adderName };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("" + myRecipe_1);
                    return [4 /*yield*/, axios.post('/api/add-recipe', { name: name, ingredients: ingredients, prepareMode: prepareMode, adderName: adderName })];
                case 2:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    myRecipe_1 = data.myRecipe, error = data.error;
                    //const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
                    console.log(myRecipe_1);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(myRecipe_1);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderFullRecipe(fullRecipe) {
    console.log("fullRecipe from server:" + fullRecipe);
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "<p id=\"name\" color=\"red\" fontsize=\"20px\">" + fullRecipe.name + "</p>";
    html += "===================================";
    html += "<p id=\"name\" color=\"red\" fontsize=\"20px\">Ingredients</p>";
    html += "===================================";
    html += "<br>";
    var ingNo = fullRecipe.ingredients.length;
    for (var i = 0; i < ingNo; i++) {
        html += "<div class=\"ingredients\">" + fullRecipe.ingredients[i] + "</div>";
    }
    html += "===================================";
    html += "<br>";
    html += "<p id=\"name\" color=\"red\" fontsize=\"20px\">Prepare Mode</p>";
    html += "===================================";
    html += "<br>";
    var preNo = fullRecipe.prepareMode.length;
    for (var j = 0; j < preNo; j++) {
        html += "<div class=\"prepares\">" + fullRecipe.prepareMode[j] + "</div>";
    }
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "absolute";
    root.style.top = "150px";
    root.style.left = "340px";
    root.style.border = "1px solid black";
    root.style.backgroundColor = "yellow";
}
function handleFixRecipe() {
    console.log("handleFixRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n        <form onsubmit=\"CheckName(event); return false;\">\n            <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\"><br>\n            <input type=\"text\" name=\"adderName\" placeholder=\"Your Name\"><br>\n            <button type=\"submit\">Get Recipe</button>\n        </form>\n    </div>";
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "absolute";
    root.style.top = "60px";
    root.style.left = "380px";
}
function CheckName(event) {
    return __awaiter(this, void 0, void 0, function () {
        var adderName, recipeName, data, myRecipe, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("CheckName");
                    console.dir(event.target);
                    console.dir(event.target.elements);
                    adderName = event.target.elements.adderName.value;
                    console.log(adderName);
                    recipeName = event.target.elements.recipeName.value;
                    console.log(recipeName);
                    console.log(adderName + ",  " + recipeName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post('/api/check-recipe', { adderName: adderName, recipeName: recipeName })];
                case 2:
                    data = (_a.sent()).data;
                    myRecipe = data.myRecipe, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderRecipeForUpdate(myRecipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderRecipeForUpdate(myRecipe) {
    console.log("renderRecipeForUnpdate");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var frm1 = "";
    frm1 += "<form action=\"\" onsubmit=\"saveIng(event)\">";
    var ingNo = myRecipe.ingredients.length;
    for (var i = 0; i < ingNo; i++) {
        frm1 += "<input type=\"text\" name=\"ing" + i + "\" value=\"" + myRecipe.ingredients[i] + "\" width=\"1500px\"><br>";
    }
    frm1 += "<button type=\"submit\">Save Ingredients</button>";
    frm1 += "<br>";
    console.log("frm1 " + frm1);
    var frm2 = "";
    frm2 += "<form action=\"\" onsubmit=\"savePre(event)\">";
    var preNo = myRecipe.ingredients.length;
    for (var j = 0; j < preNo; j++) {
        frm2 += "<input type=\"text\" name=\"pre" + j + "\" value=\"" + myRecipe.prepareMode[j] + "\"width=\"500px\"><br>";
    }
    frm2 += "<button type=\"submit\">Save Prepare Mode</button>";
    //console.log(`frm2 ${frm2}`)
    var html = "";
    html = "<div id=\"name\" color=\"red\">" + myRecipe.name + "</div>";
    html += "===================================";
    html += "<div id=\"ing\" color=\"red\">Ingredients</div>";
    html += "===================================";
    html += "<br>";
    var root1 = document.querySelector("#root1");
    root1.innerHTML = html;
    root1.style.position = "absolute";
    root1.style.top = "120px";
    root1.style.left = "340px";
    root1.style.border = "1px solid black";
    root1.style.backgroundColor = "yellow";
    var root2 = document.querySelector("#root2");
    root2.innerHTML = frm1;
    root2.style.position = "absolute";
    root2.style.top = "190px";
    root2.style.left = "340px";
    root2.style.border = "1px solid black";
    root2.style.backgroundColor = "yellow";
    var frm3 = "";
    frm3 += "===================================";
    frm3 += "<br>";
    frm3 += "<div id=\"pre\" color=\"red\">Prepare Mode</div>";
    frm3 += "===================================";
    frm3 += "<br>";
    var root3 = document.querySelector("#root3");
    root3.innerHTML = frm3;
    root3.style.position = "absolute";
    root3.style.top = "300px";
    root3.style.left = "340px";
    root3.style.border = "1px solid black";
    root3.style.backgroundColor = "yellow";
    var root4 = document.querySelector("#root4");
    root4.innerHTML += frm2;
    root4.style.position = "absolute";
    root4.style.top = "350px";
    root4.style.left = "340px";
    root4.style.border = "1px solid black";
    root4.style.backgroundColor = "yellow";
}
function saveIng(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            event.preventDefault();
            console.log("saveIng");
            console.dir(event.target.elements);
            return [2 /*return*/];
        });
    });
}
function savePre(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            event.preventDefault();
            console.log("savePre");
            console.dir(event.target.elements);
            return [2 /*return*/];
        });
    });
}
