console.log(`Connected!`);

const catImagesWrapper = document.querySelector('#catImagesWrapper') as HTMLDivElement;
console.log(catImagesWrapper)

function handleGetImages() {
	try {
		// @ts-ignore
		axios
			.get('/api/cat-images')
			.then(({ data }) => {
				console.log(data);
				const { imageArray, error } = data;
				console.log(imageArray);
				if (error) throw new Error(error);
				let html = '';
				imageArray.forEach((image) => {
                    html += `<img src="${image.src}"> <button onclick='handleDelete("${image.id}")'>DELETE</button>`
                });

                catImagesWrapper.innerHTML = html;
			})
			.catch((err) => console.error(err));
	} catch (error) {
		console.error(error);
	}
}
