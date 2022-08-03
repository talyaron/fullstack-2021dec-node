const root = document.querySelector('#root');

async function handleAddCat(ev: any) {
	try {
		ev.preventDefault();
		const age = ev.target.age.valueAsNumber;
		const catName = ev.target.catName.value;
		const imgUrl = ev.target.imgUrl.value;
		console.log(catName);

		if (!catName || !age) throw new Error('No name or age');
		//@ts-ignore
		const { data } = await axios.post('/cats/add-cat', { catName, age, imgUrl });
		handleGetAllCats()

		ev.target.age.value = '';
		ev.target.catName.value = '';
		ev.target.imgUrl.value = '';
	} catch (error) {
		console.error(error);
	}
}

async function handleGetAllCats() {
	const { data } = await axios.get('/cats/get-all-cats');
	let { catDB } = data;
	console.log(catDB)
	renderCats(catDB)
}

function renderCats(catArr) {
	let html = "";
	catArr.forEach(cat => {
		 html += `<div class="root__catCard"><img src="${cat.imgUrl}"> <span class="root__catCard__span">${cat.catName}</span> is ${cat.age} years old</div>`
	});

	root.innerHTML = html;
}

async function handlefilterCatsByAge(event){
    try {
        event.preventDefault();
        const age = event.target.age.value;
        //@ts-ignore
        const { data } = await axios.patch('/cats/get-cats-age', { age: age });
        if (!data) throw new Error("Couldn't recive data from axios GET: /cats/get-cats-age ");
        const { catsDB, error} = data;
        if(error) throw new Error(error);
        console.log(catsDB);
        renderCats(catsDB);
    } catch (error) {
        console.error(error);
    }
}