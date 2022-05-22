interface Recipe {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
    adderName: string
  }
 function handleGetRecipe(){
     console.log("handleGetRecipe")
    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let html=""
    html=`
    <div id="forms">
    <form onsubmit="GetRecipe(event)">
    <input type="text" name="recipeName" placeholder="Recipe Name">
    <button type="submit">Get Recipe</button>
    </form>
    </div>` 
    let root:HTMLDivElement=document.querySelector("#root")  
    root.innerHTML=html
    root.style.position="relative" 
    root.style.top="200px"
    root.style.left="350px"
 }

 async function GetRecipe(event: any){
     console.log("getRecipe")
    event.preventDefault();
    //console.dir(event)
    //console.dir(event.target.elements.cakeName.value)
    const recipeName:string = event.target.elements.recipeName.value
     try {
         console.log(`${recipeName}`)
         // @ts-ignore
         const { data } = await axios.put('/api/get-recipe', { recipeName });
         console.log({data})
         const { recipe, error } = data;
         console.log(recipe);
         if (error) throw new Error(error);
         renderFullRecipe(recipe);

     } catch (error) {
         console.error(error);
     } 
}

 function handleAddRepipe(){
    console.log("handleAddRecipe")
    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let html=""
    html=`
    <div id="forms">
        <form onsubmit="PostRecipe(event)">
            <input type="text" name="name" placeholder="Recipe Name"><br>`
    html+=`        
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>
            <input type="text" name="array1[]" placeholder="Ingredients"/><br>`
    html+=`
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>
            <input type="text" name="array2[]" placeholder="Prepare Mode"/><br>`
    html+=`
            <input type="text" name="adderName" placeholder="name of adder"/>
            <button type="submit">Post Recipe</button>        
            </form>
    </div>` 
    let root:HTMLDivElement=document.querySelector("#root")  
    root.innerHTML=html
    root.style.position="relative" 
    root.style.top="10px"
    root.style.left="10px"
}

async function PostRecipe(event: any){
    console.log("PostRecipe")
    console.dir(event)
    event.preventDefault();
    const name:string = event.target.elements.name.value
    console.log(name)
    console.dir(event.target.elements[0].value)
    let ingredients:Array<string>=[]
    for(let i:number=1;i<7;i++){
        if(event.target.elements[i].value!==""){
        ingredients.push(event.target.elements[i].value)
        }
    }
    console.log(ingredients)
    let prepareMode:Array<string>=[]
    for(let i:number=7;i<13;i++){
        if(event.target.elements[i].value!==""){
        prepareMode.push(event.target.elements[i].value)
        }
    }
    console.log(prepareMode)
    //const ingredients:string = event.target.elements.array1.values
    const adderName:string=event.target.elements.adderName.value
    const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
    try {
        console.log(`${myRecipe}`)
        // @ts-ignore
        const { data } = await axios.post('/api/add-recipe', {name,ingredients,prepareMode,adderName });
        console.log({data})
        const { myRecipe,error} = data;
        //const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
        console.log(myRecipe);
        if (error) throw new Error(error);
        renderFullRecipe(myRecipe);

    } catch (error) {
        console.error(error);
    } 
}

function renderFullRecipe(fullRecipe:Recipe){
    console.log(`fullRecipe from server:${fullRecipe}`)
    let forms:HTMLElement = document.querySelector("#forms");
    let html=""
    html=`<div id="name" color="red">${fullRecipe.name}</div>`
    html+=`===================================`
    html+=`<div id="ing" color="red">Ingredients</div>`
    html+=`===================================`
    html+=`<br>`
    const ingNo=fullRecipe.ingredients.length
    for(let i:number=0;i<ingNo;i++){
        html+=`<div class="ingredients">${fullRecipe.ingredients[i]}</div>`
    }
    html+=`===================================`
    html+=`<br>`
    html+=`<div id="pre" color="red">Prepare Mode</div>`
    html+=`===================================`
    html+=`<br>`
    const preNo=fullRecipe.prepareMode.length
    for(let j:number=0;j<preNo;j++){
        html+=`<div class="prepares">${fullRecipe.prepareMode[j]}</div>`
    }
    forms.innerHTML=html
    forms.style.position="absolute"
    forms.style.top="150px"
    forms.style.left="350px"
    forms.style.border="1px solid black"
    forms.style.backgroundColor="yellow"
}
