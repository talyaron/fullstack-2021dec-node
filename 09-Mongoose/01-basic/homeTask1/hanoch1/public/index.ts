async function handleCats(ev){
    ev.preventDefault()
    try {
        const image = ev.target.image.value
        const name = ev.target.name.value
        const age = ev.target.age.value
        const color = ev.target.color.value

        const {data} = await axios.post('/cat/catsList', {image, name, age, color})
        console.log(data)
        const {allCats, error} = data;
        if(error) throw new error;
        console.log(allCats);
        

            renderCats(allCats)

        
    } catch (error) {
        console.log(error);
        
    }
}

async function getCats(){
    try {
        const {data} = await axios.get('/cat/catsList')
        const {cats} = data;
        renderCats(cats)

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
            html += `<p> <img src="${cat.image}" id="img"> name: ${cat.name} age: ${cat.age} color: ${cat.color}</p>`
            
        });

        renderCats.innerHTML = html;
    } catch (error) {
    console.log(error);
            
    }
}

async function handleSearch(ev){
    ev.preventDefault()
    try {
        const age = ev.target.age.value

        const {data} = await axios.get(`/cat/searchCats?age=${age}`)
        console.log(data);
        
        const {searchCat} = data;

        console.log(searchCat)

        renderCats(searchCat)


    } catch (error) {
        console.log(error);
        
    }
}