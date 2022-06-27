async function handleCats(ev){
    ev.preventDefault()
    try {
        const image = ev.target.image.value
        const name = ev.target.name.value
        const age = ev.target.age.value
        const color = ev.target.color.value

        const {data} = await axios.post('/cat/catsList', {image, name, age, color})
        console.log(data)
        const {catsArray, error} = data;
        if(error) throw new error;
        console.log(catsArray);
        

            renderCats(catsArray)

        
    } catch (error) {
        console.log(error);
        
    }
}
let html = "";
function renderCats(catsArray){
    try {
        const renderCats = document.querySelector('#renderCats')

        // if (!Array.isArray(catsArray)) throw new Error("cats is not an array");

        catsArray.forEach(cat => { 
            html += `<div>
            <img src="${cat.image}" id="img">
            <p>name: ${cat.name}</p>
            <p>age: ${cat.age}</p>
            <p>color: ${cat.color}</p>
        </div>`
            
        });

        renderCats.innerHTML = html;
    } catch (error) {
    console.log(error);
            
    }
}