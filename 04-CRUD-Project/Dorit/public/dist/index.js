"use strict";
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
exports.__esModule = true;
function handleGetAllRecipes() {
    return __awaiter(this, void 0, void 0, function () {
        var recipeList, name, data, recipeList_1, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("handleGetAllRecipes");
                    recipeList = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    name = "Dorit";
                    return [4 /*yield*/, axios.get('/api/get-all-recipes/getRoutRecipes', { name: name })];
                case 2:
                    data = (_a.sent()).data;
                    recipeList_1 = data.recipeList, error = data.error;
                    console.log("recipes from client recieved from server: " + recipeList_1);
                    if (error)
                        throw new Error(error);
                    renderAllRecipes(recipeList_1);
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
function renderAllRecipes(recipeList) {
    console.log("renderAllRecipes");
    var root = document.querySelector("#root");
    var html = "";
    recipeList.forEach(function (element) {
        html += "<p recipe name:\"" + element.name + "\" ,adder name:\"" + element.adderName + "\"></p>";
    });
    root.innerHTML += html;
    root.style.position = "relative";
    root.style.top = "1px";
    root.style.left = "1px";
}
function handleGetRecipe() {
    console.log("handleGetRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n        <form onsubmit=\"getRecipe(event)\">\n         <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\">\n         <button type=\"submit\">Get Recipe</button>\n        </form>\n    </div>";
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "relative";
    root.style.top = "10px";
    root.style.left = "10px";
}
function getRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var recipeName, data, recipe, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getRecipe");
                    event.preventDefault();
                    recipeName = event.target.elements.recipeName.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("recipeName from getRecipe client:" + recipeName);
                    return [4 /*yield*/, axios.put('/api/get-recipe/getRoutRecipe', { recipeName: recipeName })];
                case 2:
                    data = (_a.sent()).data;
                    recipe = data.recipe, error = data.error;
                    console.log("recipe from client recieved from server: " + recipe);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(recipe);
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
function handleAddRecipe() {
    console.log("handleAddRecipe");
    var form = document.querySelector('form');
    var body = document.querySelector("body");
    var root = document.querySelector("#root");
    root.style.position = "relative";
    root.style.top = "10px";
    root.style.left = "10px";
    form.addEventListener('keyup', function (e) {
        var divIng = document.querySelector('.linesIng');
        var inputEl = document.createElement('input');
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "Array1");
        inputEl.setAttribute("placeholder", "Igredients");
        if (e.key === "Control") {
            console.log("divIng");
            divIng.append(inputEl);
            inputEl.focus();
        }
        var divPre = document.querySelector('.linesPre');
        var inputPl = document.createElement('input');
        inputPl.setAttribute("type", "text");
        inputPl.setAttribute("name", "Array2");
        inputPl.setAttribute("placeholder", "PrepareMode");
        if (e.key === "Alt") {
            console.log("divPre");
            divPre.append(inputPl);
            inputPl.focus();
        }
    });
}
// html=`
// <div id="root">
// <form onsubmit="PostRecipe(event)">
// let html=""
//         <input type="text" name="name" placeholder="Recipe Name"><br>`
// html+=`        
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>
//         <input type="text" name="array1[]" placeholder="Ingredients"/><br>`
// html+=`
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
//         <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>`
// html+=`
//         <input type="text" name="adderName" placeholder="name of adder"/>
//         <button type="submit">Post Recipe</button>        
//         </form>
// </div>` 
// //let root:HTMLDivElement=document.querySelector("#root")  
// body.innerHTML+=html
// root.style.position="relative" 
// root.style.top="10px"
// root.style.left="10px"
function PostRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, adderName, ingredients, prepareMode, _i, _a, field, data, myRecipe, error, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("PostRecipe in client");
                    console.dir(event);
                    event.preventDefault();
                    name = event.target.elements.name.value;
                    console.log(name);
                    adderName = event.target.elements.adderName.value;
                    console.log(adderName);
                    ingredients = [];
                    prepareMode = [];
                    for (_i = 0, _a = event.target.elements; _i < _a.length; _i++) {
                        field = _a[_i];
                        console.log(field.name);
                        if (field.name === "Array1") {
                            console.log(field.value);
                            if (field.value.length > 0) {
                                ingredients.push(field.value);
                            }
                        }
                        else if (field.name === "Array2") {
                            console.log(field.value);
                            if (field.value.length > 0) {
                                prepareMode.push(field.value);
                            }
                        }
                    }
                    console.log("ingredients: " + ingredients[0]);
                    console.log("prepareMode: " + prepareMode[0]);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post('/api/add-recipe/postRoutRecipe', { name: name, ingredients: ingredients, prepareMode: prepareMode, adderName: adderName })];
                case 2:
                    data = (_b.sent()).data;
                    console.log({ data: data });
                    myRecipe = data.myRecipe, error = data.error;
                    //const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
                    console.log("myRecipe recieved from server:" + myRecipe);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(myRecipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderFullRecipe(fullRecipe) {
    console.log("renderFullRecipe");
    //console.log(`fullRecipe from server:${fullRecipe}`)
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var root = document.querySelector("#root");
    if (root)
        root.remove();
    var body = document.querySelector("body");
    var root = document.createElement("root");
    body.append(root);
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
    html += "<button id=\"back\"><a href=\"index.html\">Back to beginning</a></button>";
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
    var body = document.querySelector("body");
    var root = document.createElement("root");
    body.append(root);
    var html = "";
    html = "\n    <div id=\"forms\">\n        <form onsubmit=\"CheckName(event); return false;\">\n            <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\"><br>\n            <input type=\"text\" name=\"adderName\" placeholder=\"Your Name\"><br>\n            <button type=\"submit\">Get Recipe</button>\n        </form>\n    </div>";
    root.innerHTML = html;
    root.style.position = "absolute";
    root.style.top = "60px";
    root.style.left = "380px";
}
function CheckName(event) {
    return __awaiter(this, void 0, void 0, function () {
        var adderName, recipeName, data, myRecipe, error, error_4;
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
                    return [4 /*yield*/, axios.post('/api/check-recipe/postRoutAdderName', { adderName: adderName, recipeName: recipeName })];
                case 2:
                    data = (_a.sent()).data;
                    myRecipe = data.myRecipe, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderRecipeForUpdate(myRecipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
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
    var root = document.querySelector("#root");
    var recipeName = myRecipe.name;
    console.log("recipeName: " + recipeName);
    var frm1 = "";
    frm1 += "<form action=\"\" onsubmit=\"saveIng(event,'" + recipeName + "')\">";
    var ingNo = myRecipe.ingredients.length;
    for (var i = 0; i < ingNo; i++) {
        frm1 += "<input type=\"text\" name=\"ing" + i + "\" value=\"" + myRecipe.ingredients[i] + "\" width=\"1500px\"><br>";
    }
    frm1 += "<button type=\"submit\">Save Ingredients</button><br>";
    frm1 += "</form>";
    //console.log(`frm1 ${frm1}`)
    var frm2 = "";
    frm2 += "<form action=\"\" onsubmit=\"savePre(event,'" + recipeName + "')\">";
    var preNo = myRecipe.ingredients.length;
    for (var j = 0; j < preNo; j++) {
        frm2 += "<input type=\"text\" name=\"pre" + j + "\" value=\"" + myRecipe.prepareMode[j] + "\"width=\"500px\"><br>";
    }
    frm2 += "<button type=\"submit\">Save Prepare Mode</button></form>";
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
    root1.style.top = "160px";
    root1.style.left = "680px";
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
    root3.style.top = "350px";
    root3.style.left = "680px";
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
function saveIng(event, recipeName) {
    return __awaiter(this, void 0, void 0, function () {
        var myIng, myElem, j, data, myRecipe, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log("saveIng");
                    console.log("recipeName " + recipeName);
                    console.dir(event);
                    myIng = [];
                    myElem = event.target.elements;
                    for (j = 0; j < myElem.length - 1; j++) {
                        console.log("ing" + j);
                        myIng[j] = myElem["ing" + j].value;
                        console.log(myIng[j]);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post('/api/update-ing/postRoutIng', { recipeName: recipeName, myIng: myIng })];
                case 2:
                    data = (_a.sent()).data;
                    myRecipe = data.myRecipe, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(myRecipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function savePre(event, recipeName) {
    return __awaiter(this, void 0, void 0, function () {
        var myPre, myElem, j, data, myRecipe, error, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log("savePre");
                    console.log("recipeName " + recipeName);
                    myPre = [];
                    myElem = event.target.elements;
                    for (j = 0; j < myElem.length - 1; j++) {
                        console.log("pre" + j);
                        myPre[j] = myElem["pre" + j].value;
                        console.log(myPre[j]);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post('/api/update-pre/postRoutPre', { recipeName: recipeName, myPre: myPre })];
                case 2:
                    data = (_a.sent()).data;
                    myRecipe = data.myRecipe, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(myRecipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
