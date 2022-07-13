import uid from "../controllers/helpers";


const postForm:any = document.querySelector('postForm');

async function handleGetRecipes(){
    try {
    //@ts-ignore
        const { data } = await axios.get('/recipes/get-recipes');
        console.log(data); 

        const {recipes, error} = data;
        if (error) throw new Error(error);
        renderRecipes(recipes);
    } 
    catch (error) {
       console.error(error);
    }
}

async function handleAddRecipe(ev:any) {
    try {
        ev.preventDefault()
        const title = ev.target.elements.title.value;
        const ingredients = ev.target.elements.ingredients.value;
        const owner = ev.target.elements.owner.value;
        const instructions = ev.target.elements.owner.value;
        

        console.log(title,ingredients,owner,instructions)
        
        //@ts-ignore
        const {data} = await axios.post('/recipes/add-recipe' , {title,ingredients,owner,instructions})
        console.log(data);
       
        alert("Your recipe added successfully!!")

       
    } catch (error) {
        console.error(error);
    }
}




async function handleDeleteRecipe(recipeId:string) {
    try {
       if(!recipeId)  throw new Error("Recipe's id is missing")
       //@ts-ignore
       const {data} = await axios.delete("/recipes/delete-recipe",{data:{recipeId}})

       const {recipes, error} = data;
       if (error) throw new Error(error);
       renderRecipes(recipes);
    } 
    catch (error) {
        console.error(error);
    }
}

interface Recipe{
    title?: string;
    ingredients:string;
    owner:string;
    id:string;
    instructions:string

}


async function handleUpdateRecipe(ev:any){
try {
    const newTitle = ev.target.value;
    if (!newTitle) throw new Error('title is missing');
    const id = ev.target.id;
    if (!id) throw new Error('id is missing');

           //@ts-ignore
           const {data} = await axios.patch("/recipes/update-recipe",{newTitle,id})

           const {recipes, error} = data;
           if (error) throw new Error(error);
           renderRecipes(recipes);
           showFullRecipe(recipes)


    
}
 catch (error) {
    console.error(error);
}
}



 function renderRecipes(recipes: Array<Recipe>):void {
    try {
        let html = '';
        recipes.forEach((recipe) => {
            html +=  `<div class="recipeCard"> <p class="recipeTitleP" id="${recipe.id}">${recipe.title}</p>
            <button  id="btnDeleteRecipe" onclick='handleDeleteRecipe("${recipe.id}")'>DELETE</button>
            <button  id="btnFullRecipe" onclick='handleShowAllRecipe()'>The Full Recipe</button>
            </div>
            `
          });

        const root = document.querySelector('#root');
        if (!root) throw new Error ('No root')
        root.innerHTML = html;

        showFullRecipe(recipes)
      


    } 
    catch (error) { 
        console.error(error);
    }
}

function showFullRecipe(recipes: Array<Recipe>) {

    let html = '';
    recipes.forEach((recipe) => {
        html +=  `<div class="fullRecipeCard"> <p class="fullRecTitle" id="${recipe.id}"> Recipe Of : ${recipe.title}</p>
        <p class="recOwner">By: ${recipe.owner}.</p>
        <p class="recIngredients">Ingredients : ${recipe.ingredients}.</p>
        <p class="recInstructions">How to Make ? : ${recipe.instructions}.</p>

        </div>`
      });

    const fullRecipe = document.querySelector('#fullRecipe');
    if (!fullRecipe) throw new Error ('No fullRecipe')
    fullRecipe.innerHTML = html;
}

function handleShowAllRecipe(){

    document.getElementById('fullRecipe').style.visibility='visible';

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


async function handleGetPosts(){
    try {
    //@ts-ignore
        const { data } = await axios.get('/posts/get-posts');
        console.log(data); 

        const {posts, error} = data;
        if (error) throw new Error(error);
        renderPosts(posts);
    } 
    catch (error) {
       console.error(error);
    }
}







function addPostBtn(){
    document.getElementById('postFormDiv').style.visibility='visible';
    
// addPostBtn()
}
function handleAddRecipeVisible(){
    document.getElementById('addRecipeDiv').style.visibility='visible';

}


async function handleAddPost(ev:any) {
    try {
        ev.preventDefault()
        const title = ev.target.elements.title.value;
        const ingredients = ev.target.elements.ingredients.value;
        const owner = ev.target.elements.owner.value;
        const instructions = ev.target.elements.owner.value;
        const imageSrc = ev.target.elements.imageSrc.value;

        console.log(title,ingredients,owner,instructions,imageSrc)
        
        //@ts-ignore
        const {data} = await axios.post('/posts/add-post' , {title,ingredients,owner,instructions,imageSrc})
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}


interface Post{
    title: string;
    ingredients:string;
    owner:string;
    id:string;
    instructions:string;
    imageSrc:string;
}

function renderPosts(posts: Array<Post>):void {
    try {
        let html = '';
        posts.forEach((post) => {
            html +=  `<div class="postCard"> <p onblur="handleUpdatePost(event)" id="${post.id}">${post.title}</p>
            <p class="recOwner">By: ${post.owner}.</p>
            <p class="recIngredients">Ingredients : ${post.ingredients}.</p>
            <p class="recInstructions">How to Make ? : ${post.instructions}.</p>
            <img src="${post.imageSrc}" id="imgPost">
            <button  id="btnDeletePost" onclick='handleDeletePost("${post.id}")'>DELETE POST</button>
            <button  id="btnEditPost" onclick='handleEditPost("${post.id}")'>EDIT</button>

            </div>`
          });

        const postsDiv = document.querySelector('#postsDiv');
        if (!postsDiv) throw new Error ('No posts Div')
        postsDiv.innerHTML = html;
    } 
    catch (error) { 
        console.error(error);
    }
}


async function handleDeletePost(postId:string) {
    try {
       if(!postId)  throw new Error("Post's id is missing")
       //@ts-ignore
       const {data} = await axios.delete("/posts/delete-post",{data:{postId}})

       const {posts, error} = data;
       if (error) throw new Error(error);
       renderPosts(posts);
    } 
    catch (error) {
        console.error(error);
    }
}


async function handleUpdatePost(ev:any){
    try {
        const newTitle = ev.target.value;
        if (!newTitle) throw new Error('title is missing');
        const id = ev.target.id;
        if (!id) throw new Error('id is missing');
    
               //@ts-ignore
               const {data} = await axios.patch("/posts/update-post",{newTitle,id})
    
               const {posts, error} = data;
               if (error) throw new Error(error);
               renderPosts(posts);
            
    
    
        
    }
     catch (error) {
        console.error(error);
    }
    }


