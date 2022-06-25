async function handlegetkittens() {
  try {
   // @ts-ignore
    const { data } = await axios.get("/cats/get-kittens")
    //const {docs}= data;
    console.log(data);
    rendrKittens(data)
  } catch (error) {
    console.error(error);
  }
}

function  rendrKittens(data){
  console.log(data)
  let html = '';
	data.forEach((kitten) => {
		html += `
        <div class="kittens" >
        <h4>${kitten.name} is ${kitten.age} yers old and his color is ${kitten.color}</h4>
        <img src="${kitten.image}" class="teamIcon">
        </div>`
    })
    const root= document.querySelector('#root');
    root.innerHTML=html;
}

async function searchKitten(event){
  event.preventDefault();
  try {
    const age = event.target.age.valueAsNumber;
    //console.log(age)
    //if (age!=Number) throw new Error("No age as number");
    //@ts-ignore
    const { data } = await axios.post("/cats/search-kitten", {age});
    rendrReasult(data)
  } catch (error) {
    
  }

}

function  rendrReasult(data){
  console.log(data)
  let html = '';
	data.forEach((kitten) => {
		html += `
        <div class="kittens" >
        <h4>${kitten.name} is ${kitten.age} yers old and his color is ${kitten.color}</h4>
        <img src="${kitten.image}" class="teamIcon">
        </div>`
    })
    const root= document.querySelector('#root1');
    root.innerHTML=html;
}