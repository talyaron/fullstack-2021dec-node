


import uid from "./helpers";

interface Recipe{
    title?: string;
    ingredients:string;
    owner:string;
    id:string;
    instructions:string
}
let recipes: Array <Recipe> = [{title:'Bread', ingredients:'flour,water,oil',owner:'Shira',id:'jbhvc',instructions:'1:mix all ingredients, 2:knead,3:bloat...'}];


export function getRecipes(req, res){
  try {
    res.send({recipes})
  } catch (error) {
    console.error(error);
    res.send({error:error.message});
    
  }
}
export function addRecipe(req, res){
try {
  const {title} = req.body;
  if(!title ) throw new Error('no title')

  const id = uid();
  if(!id ) throw new Error('no id')

  const {owner} = req.body;
  if(!owner ) throw new Error('no owner')

  const {ingredients} = req.body;
  if(!ingredients ) throw new Error('no ingredients')

  const {instructions} = req.body;
  if(!instructions ) throw new Error('no instructions')

  
  recipes.push({title,id,ingredients,owner,instructions})
  res.send({recipes})


  
} 
  catch (error) {
    console.error(error);
    res.send({error:error.message});
    
  }

}


export function deleteRecipe(req,res){
  try {
    const {recipeId} = req.body;
    if (!recipeId)  throw new Error ('recipeId is missing')
    console.log(recipeId);

    recipes = recipes.filter(recipe=>recipe.id !== recipeId)

    res.send({recipes});
    
  } catch (error) {
    console.error(error);
    res.send({error:error.message});
  }
}

export function updateRecipe(req,res){
  try {
    const {newTitle,id} = req.body;
    if (!newTitle) throw new Error ('No title')
    if (!id) throw new Error ('No id')


    const index = recipes.findIndex(recipe=>recipe.id === id);

    if (index ===-1) throw new Error (`No id with id: ${id} in recipes `)

    recipes[index].title = newTitle;
    res.send({recipes});



  } 
  catch (error) {
    console.error(error);
    res.send({error:error.message}); 
  }
}


