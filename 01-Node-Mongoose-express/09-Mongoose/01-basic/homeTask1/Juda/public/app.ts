
const root: HTMLDivElement = document.querySelector('#root');

async function handleAddCat(ev: any) {
    try {
        ev.preventDefault();
        const name: string = ev.target.name.value
        const color: string = ev.target.color.value
        const age: number = ev.target.age.valueAsNumber
        const imgUrl: string = ev.target.imgUrl.value

        if (!name || !color || !age || !imgUrl)
            throw new Error("One of the inputs is missing");

        //@ts-ignore
        const { data, error } = await axios.post('/cats/addCat', { name, color, age, imgUrl })

        console.log(`The cat ${name} saved to DB`)

    } catch (error) {
        console.error(error)
    }
}

async function handleGetAllCats() {
    console.log('press get all cats')

    try {
        //@ts-ignore
        const { data, error } = await axios.get('/cats/getAllCats')

        let { allCats } = data;

        renderCats(allCats)

    } catch (error) {
        console.error(error)
    }
}

function renderCats(catsArray) {

    let html = "";
    catsArray.forEach(cat => {


        html += `Name: ${cat.name} <br>
    Color: ${cat.color} <br>
    Age: ${cat.age} <br>
   <img src="${cat.imgUrl}" alt=""> <br>`

    });

    root.innerHTML = html
}

async function handleFindCat(ev: any) {

    try {
        console.log('Searching')
        ev.preventDefault();
        const age: number = ev.target.age.valueAsNumber;
        if (!age) throw new Error('please enter age')
        console.log(age)
        //@ts-ignore
        const { data } = await axios.patch('/cats/findCats', { age: age });


        const filteredCats = data;

        console.log(filteredCats);

        renderCats(filteredCats)

    } catch (error) {
        console.error(error)
    }

}


async function handleFindCatsExpert(ev) {
    try {
        ev.preventDefault();
        const name: string = ev.target.name.value
        const color: string = ev.target.color.value
        const age: number = ev.target.age.valueAsNumber

        if (!name && !color && !age) {
            throw new Error('enter at lease one parameter')
        }
        //@ts-ignore
        const { data } = await axios.patch('/cats/findCatsExpert', ({name, color, age}))

        const filteredCats = data

        renderCats(filteredCats)
        
    } catch (error) {
        console.error(error)
    }

}