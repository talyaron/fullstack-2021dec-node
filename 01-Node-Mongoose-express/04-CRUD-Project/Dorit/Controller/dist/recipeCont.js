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
exports.getAllRecipes = exports.updatePre = exports.updateIng = exports.checkRecipe = exports.addRecipe = exports.getRecipe = void 0;
var recipes = [
    { name: "HoneyCake",
        ingredients: ["honey 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
        adderName: "Dorit Guy" },
    { name: "vanillaCake",
        ingredients: ["vanilla 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
        adderName: "Gadi Guy" }
];
function getRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, recipeName_1, recipeIndex;
        return __generator(this, function (_a) {
            console.debug("getRecipe from controller");
            try {
                name = req.body.name;
                recipeName_1 = name;
                if (!recipeName_1)
                    throw new Error("recipeName is required");
                recipeIndex = recipes.findIndex(function (recipe) { return recipe.name === recipeName_1; });
                if (recipeIndex === -1)
                    throw new Error("recipeName not found");
                res.send({ recipe: recipes[recipeIndex] });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getRecipe = getRecipe;
function addRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, ingredients, prepareMode, adderName, myRecipe;
        return __generator(this, function (_b) {
            try {
                _a = req.body, name = _a.name, ingredients = _a.ingredients, prepareMode = _a.prepareMode, adderName = _a.adderName;
                if (!name)
                    throw new Error("name is required");
                if (!ingredients)
                    throw new Error("ingredients are required");
                if (!prepareMode)
                    throw new Error("prepareMode is required");
                if (!adderName)
                    throw new Error("adderName is required");
                myRecipe = { name: name, ingredients: ingredients, prepareMode: prepareMode, adderName: adderName };
                recipes.push(myRecipe);
                res.send({ myRecipe: myRecipe });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.addRecipe = addRecipe;
function checkRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, adderName, recipeName, myRecipe_1, recipeIndex, recipeAdderName;
        return __generator(this, function (_b) {
            try {
                _a = req.body, adderName = _a.adderName, recipeName = _a.recipeName;
                if (!adderName)
                    throw new Error("adderName is required");
                if (!recipeName)
                    throw new Error("recipeName is required");
                myRecipe_1 = { recipeName: recipeName, adderName: adderName };
                recipeIndex = recipes.findIndex(function (recipe) { return recipe.name === myRecipe_1.recipeName; });
                if (recipeIndex === -1)
                    throw new Error("recipeName not found");
                recipeAdderName = recipes[recipeIndex]['adderName'];
                //console.debug(recipeAdderName,recipes[recipeIndex]);
                if (recipeAdderName !== myRecipe_1.adderName) {
                    throw new Error("This recipe was added by another user");
                }
                else {
                    myRecipe_1 = recipes[recipeIndex];
                    res.send({ myRecipe: myRecipe_1 });
                }
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.checkRecipe = checkRecipe;
function updateIng(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, recipeName, myIng, myInp_1, recipeIndex, len, i, myRecipe;
        return __generator(this, function (_b) {
            try {
                _a = req.body, recipeName = _a.recipeName, myIng = _a.myIng;
                if (!recipeName)
                    throw new Error("name is required");
                if (!myIng)
                    throw new Error("ingredients are required");
                console.debug(myIng[0]);
                myInp_1 = { recipeName: recipeName, myIng: myIng };
                recipeIndex = recipes.findIndex(function (recipe) { return recipe.name === myInp_1.recipeName; });
                if (recipeIndex === -1)
                    throw new Error("recipeName not found");
                console.debug("recipeIndex: " + recipeIndex);
                len = myInp_1.myIng.length;
                for (i = 0; i < len; i++) {
                    recipes[recipeIndex]["ingredients"][i] = myInp_1.myIng[i];
                }
                ;
                console.debug(recipes[recipeIndex]);
                myRecipe = recipes[recipeIndex];
                res.send({ myRecipe: myRecipe });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.updateIng = updateIng;
function updatePre(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, recipeName, myPre, myInp_2, recipeIndex, len, i, myRecipe;
        return __generator(this, function (_b) {
            try {
                _a = req.body, recipeName = _a.recipeName, myPre = _a.myPre;
                if (!recipeName)
                    throw new Error("name is required");
                if (!myPre)
                    throw new Error("ingredients are required");
                console.debug(myPre[0]);
                myInp_2 = { recipeName: recipeName, myPre: myPre };
                recipeIndex = recipes.findIndex(function (recipe) { return recipe.name === myInp_2.recipeName; });
                if (recipeIndex === -1)
                    throw new Error("recipeName not found");
                console.debug("recipeIndex: " + recipeIndex);
                len = myInp_2.myPre.length;
                for (i = 0; i < len; i++) {
                    recipes[recipeIndex]["prepareMode"][i] = myInp_2.myPre[i];
                }
                ;
                console.debug(recipes[recipeIndex]["prepareMode"][0]);
                myRecipe = recipes[recipeIndex];
                res.send({ myRecipe: myRecipe });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.updatePre = updatePre;
function getAllRecipes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var recipeList, i, name, adderName, RecipeL;
        return __generator(this, function (_a) {
            console.debug("getallrecipes from controller");
            recipeList = [];
            for (i = 0; i < recipes.length; i++) {
                name = recipes[i].name;
                adderName = recipes[i].adderName;
                RecipeL = { name: name, adderName: adderName };
                recipeList.push(RecipeL);
            }
            try {
                res.send({ recipeList: recipeList });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllRecipes = getAllRecipes;
exports["default"] = recipes;
