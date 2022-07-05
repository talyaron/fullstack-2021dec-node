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
var postForm = document.querySelector('postForm');
function handleGetRecipes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, recipes, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/recipes/get-recipes')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    recipes = data.recipes, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderRecipes(recipes);
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
function handleAddRecipe(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, ingredients, owner, instructions, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    ingredients = ev.target.elements.ingredients.value;
                    owner = ev.target.elements.owner.value;
                    instructions = ev.target.elements.owner.value;
                    console.log(title, ingredients, owner, instructions);
                    return [4 /*yield*/, axios.post('/recipes/add-recipe', { title: title, ingredients: ingredients, owner: owner, instructions: instructions })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    alert("Your recipe added successfully!!");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteRecipe(recipeId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, recipes, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!recipeId)
                        throw new Error("Recipe's id is missing");
                    return [4 /*yield*/, axios["delete"]("/recipes/delete-recipe", { data: { recipeId: recipeId } })];
                case 1:
                    data = (_a.sent()).data;
                    recipes = data.recipes, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderRecipes(recipes);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateRecipe(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newTitle, id, data, recipes, error, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newTitle = ev.target.value;
                    if (!newTitle)
                        throw new Error('title is missing');
                    id = ev.target.id;
                    if (!id)
                        throw new Error('id is missing');
                    return [4 /*yield*/, axios.patch("/recipes/update-recipe", { newTitle: newTitle, id: id })];
                case 1:
                    data = (_a.sent()).data;
                    recipes = data.recipes, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderRecipes(recipes);
                    showFullRecipe(recipes);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderRecipes(recipes) {
    try {
        var html_1 = '';
        recipes.forEach(function (recipe) {
            html_1 += "<div class=\"recipeCard\"> <p class=\"recipeTitleP\" id=\"" + recipe.id + "\">" + recipe.title + "</p>\n            <button  id=\"btnDeleteRecipe\" onclick='handleDeleteRecipe(\"" + recipe.id + "\")'>DELETE</button>\n            <button  id=\"btnFullRecipe\" onclick='handleShowAllRecipe()'>The Full Recipe</button>\n            </div>\n            ";
        });
        var root = document.querySelector('#root');
        if (!root)
            throw new Error('No root');
        root.innerHTML = html_1;
        showFullRecipe(recipes);
    }
    catch (error) {
        console.error(error);
    }
}
function showFullRecipe(recipes) {
    var html = '';
    recipes.forEach(function (recipe) {
        html += "<div class=\"fullRecipeCard\"> <p class=\"fullRecTitle\" id=\"" + recipe.id + "\"> Recipe Of : " + recipe.title + "</p>\n        <p class=\"recOwner\">By: " + recipe.owner + ".</p>\n        <p class=\"recIngredients\">Ingredients : " + recipe.ingredients + ".</p>\n        <p class=\"recInstructions\">How to Make ? : " + recipe.instructions + ".</p>\n\n        </div>";
    });
    var fullRecipe = document.querySelector('#fullRecipe');
    if (!fullRecipe)
        throw new Error('No fullRecipe');
    fullRecipe.innerHTML = html;
}
function handleShowAllRecipe() {
    document.getElementById('fullRecipe').style.visibility = 'visible';
}
// function addIngredientsList(){
//         let ingredField = document.querySelector('#ingredField')
//         // CategoryArray.push(event.target.value);
//         let li = document.createElement("li");
//         // li.innerText = ingredField.value;
//         ingredField.appendChild(li);
//         console.log(ingredField);
// }
//POSTS://
function handleGetPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var data, posts, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/posts/get-posts')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    posts = data.posts, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderPosts(posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function addPostBtn() {
    document.getElementById('postFormDiv').style.visibility = 'visible';
    // addPostBtn()
}
function handleAddRecipeVisible() {
    document.getElementById('addRecipeDiv').style.visibility = 'visible';
}
function handleAddPost(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, ingredients, owner, instructions, imageSrc, data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    ingredients = ev.target.elements.ingredients.value;
                    owner = ev.target.elements.owner.value;
                    instructions = ev.target.elements.owner.value;
                    imageSrc = ev.target.elements.imageSrc.value;
                    console.log(title, ingredients, owner, instructions, imageSrc);
                    return [4 /*yield*/, axios.post('/posts/add-post', { title: title, ingredients: ingredients, owner: owner, instructions: instructions, imageSrc: imageSrc })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderPosts(posts) {
    try {
        var html_2 = '';
        posts.forEach(function (post) {
            html_2 += "<div class=\"postCard\"> <p onblur=\"handleUpdatePost(event)\" id=\"" + post.id + "\">" + post.title + "</p>\n            <p class=\"recOwner\">By: " + post.owner + ".</p>\n            <p class=\"recIngredients\">Ingredients : " + post.ingredients + ".</p>\n            <p class=\"recInstructions\">How to Make ? : " + post.instructions + ".</p>\n            <img src=\"" + post.imageSrc + "\" id=\"imgPost\">\n            <button  id=\"btnDeletePost\" onclick='handleDeletePost(\"" + post.id + "\")'>DELETE POST</button>\n            <button  id=\"btnEditPost\" onclick='handleEditPost(\"" + post.id + "\")'>EDIT</button>\n\n            </div>";
        });
        var postsDiv = document.querySelector('#postsDiv');
        if (!postsDiv)
            throw new Error('No posts Div');
        postsDiv.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeletePost(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, posts, error, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!postId)
                        throw new Error("Post's id is missing");
                    return [4 /*yield*/, axios["delete"]("/posts/delete-post", { data: { postId: postId } })];
                case 1:
                    data = (_a.sent()).data;
                    posts = data.posts, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderPosts(posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePost(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newTitle, id, data, posts, error, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newTitle = ev.target.value;
                    if (!newTitle)
                        throw new Error('title is missing');
                    id = ev.target.id;
                    if (!id)
                        throw new Error('id is missing');
                    return [4 /*yield*/, axios.patch("/posts/update-post", { newTitle: newTitle, id: id })];
                case 1:
                    data = (_a.sent()).data;
                    posts = data.posts, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderPosts(posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
