interface Recipe {
  name: string;
  ingredients: Array<string>;
  prepareMode: Array<string>;
  adderName: string
}

let recipes: Array<Recipe> = [
  { name: "HoneyCake", 
  ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
   prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
   adderName:"Dorit Guy"},
   { name: "vanillaCake", 
   ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
    prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
    adderName:"Gadi Guy"}
];

export async function getRecipe(req:any, res:any) {
            try {
                const {recipeName} = req.body
                if (!recipeName) throw new Error("recipeName is required");
                const recipeIndex = recipes.findIndex(recipe => recipe.name === recipeName);
                if (recipeIndex===-1) throw new Error("recipeName not found")
                res.send({ recipe: recipes[recipeIndex] });
              }
             catch (error:any) {
              res.send({ error: error.message });
            }
        }
export default recipes
