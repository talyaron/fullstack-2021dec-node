interface Cake {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
  }
 function handleGetRecipe(){
     console.log("handleGetRecipe")
    let forms:HTMLDivElement = document.querySelector("#forms")
    if(forms) forms.remove()
    let html=""
    html=`
    <div id="forms">
    <form onsubmit="GetRecipe(event)">
    <input type="text" name="cakeName" placeholder="Recipe Name">
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
    const cakeName:string = event.target.elements.cakeName.value
     try {
         console.log(`${cakeName}`)
         // @ts-ignore
         const { data } = await axios.put('/api/get-cake', { cakeName });
         console.log({data})
         const { cake, error } = data;
         console.log(cake);
         if (error) throw new Error(error);
         renderFullCake(cake);

     } catch (error) {
         console.error(error);
     } 
}


function renderFullCake(fullCake:Cake){
    console.log(`fullCake from server:${fullCake}`)
    let forms:HTMLElement = document.querySelector("#forms");
    let html=""
    html=`<div id="name" color="red">${fullCake.name}</div>`
    html+=`===================================`
    html+=`<div id="ing" color="red">Ingredients</div>`
    html+=`===================================`
    html+=`<br>`
    const ingNo=fullCake.ingredients.length
    for(let i:number=0;i<ingNo;i++){
        html+=`<div class="ingredients">${fullCake.ingredients[i]}</div>`
    }
    html+=`===================================`
    html+=`<br>`
    html+=`<div id="pre" color="red">Prepare Mode</div>`
    html+=`===================================`
    html+=`<br>`
    const preNo=fullCake.prepareMode.length
    for(let j:number=0;j<preNo;j++){
        html+=`<div class="prepares">${fullCake.prepareMode[j]}</div>`
    }
    forms.innerHTML=html
    forms.style.position="absolute"
    forms.style.top="150px"
    forms.style.left="350px"
    forms.style.border="1px solid black"
    forms.style.backgroundColor="yellow"
}
