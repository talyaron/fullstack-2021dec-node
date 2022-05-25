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
    root.style.top="10px"
    root.style.left="10px"
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
    html=`<p id="name" color="red" fontsize="20px">${fullRecipe.name}</p>`
    html+=`===================================`
    html+=`<p id="name" color="red" fontsize="20px">Ingredients</p>`
    html+=`===================================`
    html+=`<br>`
    const ingNo=fullRecipe.ingredients.length
    for(let i:number=0;i<ingNo;i++){
        html+=`<div class="ingredients">${fullRecipe.ingredients[i]}</div>`
    }
    html+=`===================================`
    html+=`<br>`
    html+=`<p id="name" color="red" fontsize="20px">Prepare Mode</p>`
    html+=`===================================`
    html+=`<br>`
    const preNo=fullRecipe.prepareMode.length
    for(let j:number=0;j<preNo;j++){
        html+=`<div class="prepares">${fullRecipe.prepareMode[j]}</div>`
    }
    forms.innerHTML=html
    forms.style.position="absolute"
    forms.style.top="150px"
    forms.style.left="340px"
    forms.style.border="1px solid black"
    forms.style.backgroundColor="yellow"
}

function handleFixRecipe(){
    console.log("handleFixRecipe")
    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let html=""
    html=`
    <div id="forms">
        <form onsubmit="CheckName(event); return false;">
            <input type="text" name="recipeName" placeholder="Recipe Name"><br>
            <input type="text" name="adderName" placeholder="Your Name"><br>
            <button type="submit">Get Recipe</button>
        </form>
    </div>` 
    let root:HTMLDivElement=document.querySelector("#root")  
    root.innerHTML=html
    root.style.position="absolute" 
    root.style.top="20px"
    root.style.left="20px"
}

async function CheckName(event){
     console.log("CheckName")
     console.dir(event.target)
 
    console.dir(event.target.elements)
    const adderName:string=event.target.elements.adderName.value
    console.log(adderName)
    const recipeName:string=event.target.elements.recipeName.value
    console.log(recipeName)
    console.log(`${adderName},  ${recipeName}`)

    try{ 
        // @ts-ignore    
        const { data } = await axios.post('/api/check-recipe',{adderName, recipeName});
        const { myRecipe,error} = data;
        if (error) throw new Error(error);
        renderRecipeForUpdate(myRecipe)

    } catch (error) {
        console.error(error);
    } 
}


function renderRecipeForUpdate(myRecipe:Recipe){
        console.log("renderRecipeForUnpdate")
        console.log(`fullRecipe from server:${myRecipe['ingredients']}`)
        console.log(`fullRecipe from server:${myRecipe['prepareMode']}`)
        let forms:HTMLElement = document.querySelector("#forms");
        let html=""
        html=`<div id="name" color="red">${myRecipe.name}</div>`
        html+=`===================================`
        html+=`<div id="ing" color="red">Ingredients</div>`
        html+=`===================================`
        html+=`<br>`
        const ingNo=myRecipe.ingredients.length
        for(let i:number=0;i<ingNo;i++){
            html+=`<textarea id="ing" name="ing">
            $"{${myRecipe.ingredients[i]}"
            </textarea>`
        }
        //html+=`<input type="textarea" name="ingredients" value="${myRecipe.ingredients[i]}"><br>`
        html+=`===================================`
        html+=`<br>`
        html+=`<div id="pre" color="red">Prepare Mode</div>`
        html+=`===================================`
        html+=`<br>`
        const preNo=myRecipe.prepareMode.length
        for(let j:number=0;j<preNo;j++){
            html+=`<input type="textarea" name="prepareMode" value="${myRecipe.prepareMode[j]}"><br>`
        }
        forms.innerHTML=html
        forms.style.position="absolute"
        forms.style.top="150px"
        forms.style.left="340px"
        forms.style.border="1px solid black"
        forms.style.backgroundColor="yellow"
}   

