interface Recipe {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
    adderName: string
  }
interface recipePart{
    name:string;
    adderName:string
}  
async function handleGetAllRecipes(){
    console.log("handleGetAllRecipes")
   
    let recipeList:Array<recipePart>=[]
    try {
        // @ts-ignore
        const { data } = await axios.get('/api/get-all-recipes/getRoutRecipes')
        const { recipeList, error } = data;
        console.log(`recipes from client recieved from server: ${recipeList}`);
        if (error) throw new Error(error);
        console.log(recipeList[0])
        console.log(recipeList[1])
        renderAllRecipes(recipeList);
    } catch (error) {
        console.error(error);
    }
}

function renderAllRecipes(recipeList:Array<recipePart>){
    console.log("renderAllRecipes")
    console.log(recipeList[0])
    console.log(recipeList[1])
    let root:HTMLDivElement=document.querySelector("#root")
    if (!root) console.log("root does not exist") 
 
    let html:string=""
    recipeList.forEach(element => {
        const name = element.name
        html+=
        `<a href="getOne.html?name=${name}">
            <div class = "recipeList">
            recipe name:"${element.name}" ,adder name:"${element.adderName}<br>
            </div>
        </a>`
       //html+=`<div class="recipeList"> recipe name:"${element.name}" ,adder name:"${element.adderName}"</div>` 
    });
    console.log(html)
    root.innerHTML+=html
    root.style.position="relative" 
    root.style.top="100px"
    root.style.left="100px"

}

function handleGetRecipe(){
    console.log("handleGetRecipe")

    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let html=""
    html=`
    <div id="forms">
        <form onsubmit="getRecipe(event,)">
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

 async function getRecipe(){
     console.log("getRecipe")
        try {
          const queryString = window.location.search;
          console.log(queryString);
          const urlParams = new URLSearchParams(queryString);
          const name = urlParams.get("name");
          console.log(name);
          // @ts-ignore
          const { data } = await axios.put('/api/get-recipe/getRoutRecipe',{name})
          const { recipe, error } = data;
          console.log(`recipe from client recieved from server: ${recipe}`);
          if (error) throw new Error(error);
          renderFullRecipe(recipe);

        } catch (error) {
          console.error(error);
          return false;
        }
      }


 function handleAddRecipe(){
    console.log("handleAddRecipe")
    const form = document.querySelector('form')
    let body = document.querySelector("body")
    let root:HTMLDivElement=document.querySelector("#root")   
    root.style.position="relative" 
    root.style.top="10px"
    root.style.left="10px" 


    form.addEventListener('keyup', (e:any) => {
        const divIng = document.querySelector('.linesIng')
    
        const inputEl = document.createElement('input')
        inputEl.setAttribute("type", "text")
        inputEl.setAttribute("name", "Array1")
        inputEl.setAttribute("placeholder", "Igredients")
    
        if (e.key === "Control") {
            console.log("divIng")
            divIng.append(inputEl)
            inputEl.focus()
        }
        const divPre = document.querySelector('.linesPre')

        const inputPl = document.createElement('input')
        inputPl.setAttribute("type", "text")
        inputPl.setAttribute("name", "Array2")
        inputPl.setAttribute("placeholder", "PrepareMode")
              
        if (e.key === "Alt") {
            console.log("divPre")
            divPre.append(inputPl)
            inputPl.focus()
        }
    }) 
 }

 function handleAddLineIng() {
    const divIng = document.querySelector('.linesIng')

    const inputEl = document.createElement('input')
    inputEl.setAttribute("type", "text")
    inputEl.setAttribute("name", "Array1")
    inputEl.setAttribute("placeholder", "Igredients")
    divIng.append(inputEl)
    inputEl.focus()
 }

 function handleAddLinePre(){
    const divPre = document.querySelector('.linesPre')

    const inputPl = document.createElement('input')
    inputPl.setAttribute("type", "text")
    inputPl.setAttribute("name", "Array2")
    inputPl.setAttribute("placeholder", "PrepareMode")
    divPre.append(inputPl)
    inputPl.focus()
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


async function PostRecipe(event: any){
    console.log("PostRecipe in client")
    console.dir(event)
    event.preventDefault();
    const name:string = event.target.elements.name.value
    console.log(name)
    const adderName:string = event.target.elements.adderName.value
    console.log(adderName)
    //=============================================
    // console.dir(event.target.elements[0].value)
    // let ingredients:Array<string>=[]
    // for(let i:number=1;i<7;i++){
    //     if(event.target.elements[i].value!==""){
    //     ingredients.push(event.target.elements[i].value)
    //     }
    // }
    // console.log(ingredients)
    // let prepareMode:Array<string>=[]
    // for(let i:number=7;i<13;i++){
    //     if(event.target.elements[i].value!==""){
    //     prepareMode.push(event.target.elements[i].value)
    //     }
    // }
    // console.log(prepareMode)
    //=======================================

    //const obj = {}
    let ingredients:Array<string> = []
    let prepareMode:Array<string> = []
    for (let field of event.target.elements) {
        console.log(field.name)
       
            if (field.name==="Array1") {
                console.log(field.value)
                if (field.value.length > 0) {
                    ingredients.push(field.value)
                }
            } else if (field.name==="Array2"){
                console.log(field.value)    
                if (field.value.length > 0) {
                    prepareMode.push(field.value)
                }
            }    

    }
    console.log(`ingredients: ${ingredients[0]}`)
    console.log(`prepareMode: ${prepareMode[0]}`)

    try {
        //console.log(`${myRecipe}`)
        // @ts-ignore
        const { data } = await axios.post('/api/add-recipe/postRoutRecipe', {name,ingredients,prepareMode,adderName });
        console.log({data})
        //const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
        const{ myRecipe,error} = data;
        //const myRecipe:Recipe={name,ingredients,prepareMode,adderName}
        console.log(`myRecipe recieved from server:${myRecipe}`);
        if (error) throw new Error(error);
        renderFullRecipe(myRecipe);

    } catch (error) {
        console.error(error);
    } 
}

function renderFullRecipe(fullRecipe:Recipe){
    console.log("renderFullRecipe")
    //console.log(`fullRecipe from server:${fullRecipe}`)
    let forms:HTMLElement = document.querySelector("#forms");
    if(forms) forms.remove()
    let root:HTMLDivElement=document.querySelector("#root")  
    if(root) root.remove()
    let body = document.querySelector("body")
    let root = document.createElement("root")
    body.append(root)
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
    html+=`<button id="back"><a href="index.html">Back to beginning</a></button>`
    root.innerHTML=html
    root.style.position="absolute"
    root.style.top="150px"
    root.style.left="340px"
    root.style.border="1px solid black"
    root.style.backgroundColor="yellow"
}

function handleFixRecipe(){
    console.log("handleFixRecipe")
    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let body = document.querySelector("body")
    let root:HTMLElement = document.createElement("root")
    body.append(root)
    let html=""
    html=`
    <div id="forms">
        <form onsubmit="CheckName(event); return false;">
            <input type="text" name="recipeName" placeholder="Recipe Name"><br>
            <input type="text" name="adderName" placeholder="Your Name"><br>
            <button type="submit">Get Recipe</button>
        </form>
    </div>` 
    
    root.innerHTML=html
    root.style.position="absolute" 
    root.style.top="60px"
    root.style.left="380px"
}

async function CheckName(event:any){
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
        const { data } = await axios.post('/api/check-recipe/postRoutAdderName',{adderName, recipeName});
        const { myRecipe,error} = data;
        if (error) throw new Error(error);
        renderRecipeForUpdate(myRecipe)

    } catch (error) {
        console.error(error);
    } 
}


function renderRecipeForUpdate(myRecipe:Recipe){
        console.log("renderRecipeForUnpdate")
        let forms:HTMLElement = document.querySelector("#forms");
        if(forms) forms.remove()
        let root:HTMLDivElement=document.querySelector("#root")  
        let recipeName:string=myRecipe.name
        console.log(`recipeName: ${recipeName}`)
        let frm1=""
        frm1+=`<form action="" onsubmit="saveIng(event,'${recipeName}')">`
        const ingNo=myRecipe.ingredients.length
        for(let i:number=0;i<ingNo;i++){
             frm1+=`<input type="text" name="ing${i}" value="${myRecipe.ingredients[i]}" width="1500px"><br>`
        }
        frm1+=`<button type="submit">Save Ingredients</button><br>`
        frm1+=`</form>`
        //console.log(`frm1 ${frm1}`)

        let frm2=""
        frm2+=`<form action="" onsubmit="savePre(event,'${recipeName}')">`
        const preNo=myRecipe.ingredients.length
        for(let j:number=0;j<preNo;j++){
            frm2+=`<input type="text" name="pre${j}" value="${myRecipe.prepareMode[j]}"width="500px"><br>`
        }
        frm2+=`<button type="submit">Save Prepare Mode</button></form>` 
        //console.log(`frm2 ${frm2}`)
       
        let html=""
        html=`<div id="name" color="red">${myRecipe.name}</div>`
        html+=`===================================`
        html+=`<div id="ing" color="red">Ingredients</div>`
        html+=`===================================`
        html+=`<br>`
        let root1:HTMLDivElement=document.querySelector("#root1") 
        root1.innerHTML=html
        root1.style.position="absolute"
        root1.style.top="160px"
        root1.style.left="680px"
        root1.style.border="1px solid black"
        root1.style.backgroundColor="yellow"
        let root2:HTMLDivElement=document.querySelector("#root2") 
        root2.innerHTML=frm1
        root2.style.position="absolute"
        root2.style.top="190px"
        root2.style.left="340px"
        root2.style.border="1px solid black"
        root2.style.backgroundColor="yellow"
        let frm3:string=""
        frm3+=`===================================`
        frm3+=`<br>`
        frm3+=`<div id="pre" color="red">Prepare Mode</div>`
        frm3+=`===================================`
        frm3+=`<br>`
        let root3:HTMLDivElement=document.querySelector("#root3") 
        root3.innerHTML=frm3
        root3.style.position="absolute"
        root3.style.top="350px"
        root3.style.left="680px"
        root3.style.border="1px solid black"
        root3.style.backgroundColor="yellow"
        let root4:HTMLDivElement=document.querySelector("#root4") 
        root4.innerHTML+=frm2
        root4.style.position="absolute"
        root4.style.top="350px"
        root4.style.left="340px"
        root4.style.border="1px solid black"
        root4.style.backgroundColor="yellow"
       
} 

async function saveIng(event,recipeName){
    event.preventDefault()
    console.log("saveIng")
    console.log(`recipeName ${recipeName}`)
    console.dir(event)
    let myIng=[]
    let myElem=event.target.elements
    for(let j:number=0;j<myElem.length-1;j++){
        console.log(`ing${j}`)
        myIng[j] = myElem[`ing${j}`].value;
        console.log(myIng[j])
    }
    try{ 
        // @ts-ignore    
        const { data } = await axios.post('/api/update-ing/postRoutIng',{recipeName,myIng});
        const { myRecipe,error} = data;
        if (error) throw new Error(error);
        renderFullRecipe(myRecipe)

    } catch (error) {
        console.error(error);
    } 

}

async function savePre(event,recipeName){
    event.preventDefault()
    console.log("savePre")
        console.log(`recipeName ${recipeName}`)

        let myPre=[]
        let myElem=event.target.elements
        for(let j:number=0;j<myElem.length-1;j++){
            console.log(`pre${j}`)
            myPre[j] = myElem[`pre${j}`].value;
            console.log(myPre[j])
        }
        try{ 
            // @ts-ignore    
            const { data } = await axios.post('/api/update-pre/postRoutPre',{recipeName,myPre});
            const { myRecipe,error} = data;
            if (error) throw new Error(error);
            renderFullRecipe(myRecipe)
    
        } catch (error) {
            console.error(error);
        } 
    
    }


