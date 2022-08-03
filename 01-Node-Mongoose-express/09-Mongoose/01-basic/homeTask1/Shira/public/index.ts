import { Model } from "mongoose";

 async function handleAddCat(ev:any) {
    try {
       ev.preventDefault();
       const name = ev.target.name.value;
       const age = ev.target.age.valueAsNumber;
       const color = ev.target.color.value;
       const image = ev.target.image.value;

      //  console.log(image);
       

       if(!name || !age || !color ||!image) throw new Error('name,color or age missing ');
       //@ts-ignore
       const {data} = await axios.post("/cats/add-cat",{name,age,color,image} )
       console.log(data);
       
       const root = document.getElementById('root');
    //    root.innerHTML = `  <img src=" ${image} "/>'`;
   renderCats(name,age,color,image)
       
    } catch (error) {
        console.error(error);
        
    }
    
}

function renderCats(name,age,color,image) {
   const root: HTMLElement = document.querySelector("#root");
 
   root.innerHTML = `My cat's name is: ${name} ,  its ${age} years old and its color is ${color} , and here it is:${image}`;
 }
 