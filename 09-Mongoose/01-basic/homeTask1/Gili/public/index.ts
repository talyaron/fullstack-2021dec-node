async function handleAddCat(ev: any) {
	try {
		ev.preventDefault();
		const age = ev.target.age.valueAsNumber;
		const catName = ev.target.catName.value;
		const imgUrl = ev.target.imgUrl.value;

    console.log(age, catName, imgUrl)

		ev.target.age.value = '';
		ev.target.catName.value = '';
		ev.target.imgUrl.value = '';

		if (!catName || !age) throw new Error('No name or age');
		//@ts-ignore
		const { data } = await axios.post('/cats/add-cat', { catName, age, imgUrl });
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

async function handleGetAllCats() {
	const { data } = await axios.get('/cats/get-all-cats');
	console.log(data);
}

function renderCats(catArr) {}
