import express from 'express'
const router = express.Router();
// import {getPost} from "../controllers/recipeCont";
import {getRecipes,addRecipe,deleteRecipe,updateRecipe} from "../controllers/recipeCont";

router
.get("/get-recipes",getRecipes)
.post("/add-recipe",addRecipe)
.delete("/delete-recipe",deleteRecipe)
.patch("/update-recipe",updateRecipe)





export default router;


