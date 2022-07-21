async function handleAddProduct(ev : any) {
    ev.preventDefault();

    try {
        const title = ev.target.elements.title.value;
        console.log(title);

        // @ts-ignore
        const {data} = await axios.post("/products/addProduct", {title, ownerId});
        console.log(data);

        const {ok} = data;
        if (ok) {
            renderProducts(data)
        }

    } catch (error) {
        console.error(error);
    }
}

function renderProducts(products) {
    let html = "";
    products.forEach(product => {
        html += `<div class="product">${product.title}></div>`;
    }); 
}