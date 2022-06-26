interface Cat{
    name: string,
    age: number
}


let allCats:Array<Cat>=[];


async function getAllCats():Promise<any>{
try{
   //@ts-ignore
  const { data } = await axios.get("/cats/get-all-cats")
    console.log(data);
    const {allCats,error} = data;
    if(error) throw error;
    renderAllCats(allCats);

}catch(error) {
  console.error(error);
}
}

function renderAllCats(allCats){
    try {
        if(!Array.isArray(allCats)) throw new Error ('the cats are not array');
        let newCat: HTMLDivElement = document.querySelector('#root')
        let html:string="";
        allCats.forEach((Element)=>{
            html += `<p>name:${Element.name}, age:${Element.age}' /></p>`;
    });
    newCat.innerHTML = html;
    }catch(error) {
        console.error(error);
      }
    }


async function handleAddCat(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const age = ev.target.age.valueAsNumber;
        if(!name || !age) throw new Error ("No Data");
        // @ts-ignore
        const {data} = await axios.post("/cats/add-cat",{name,age});
        console.log(data)
        console.dir(data)
        renderCats(data);
    }catch (error) {
        console.error(error);
      }
}

function renderCats(cat){
    const catR = document.querySelector("#root")
    catR.innerHTML=`new cat: name=${cat.name}, age:${cat.age}}`
 }
