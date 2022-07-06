"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
// import {getPost} from "../controllers/recipeCont";
var recipeCont_1 = require("../controllers/recipeCont");
router
    .get("/get-recipes", recipeCont_1.getRecipes)
    .post("/add-recipe", recipeCont_1.addRecipe)["delete"]("/delete-recipe", recipeCont_1.deleteRecipe)
    .patch("/update-recipe", recipeCont_1.updateRecipe);
exports["default"] = router;
