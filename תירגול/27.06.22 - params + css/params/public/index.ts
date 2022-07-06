async function getAllProduct() {
    const { data } = await axios.get('/api/get-all-products')
    console.log(data)

    const { productsArray } = data;

    renderDataFromServerWithAllProducts(productsArray)
}

async function getOneItemFromServer(id) {
    console.log(id)

    const { data } = await axios.get(`/api/id?${id}`)

    console.log(data)
}

function renderDataFromServerWithAllProducts(items) {
    const root = document.querySelector('.rootItems')
    console.log(items)
    let html = ''

    items.forEach(product => {
        html += `<button onclick="getOneItemFromServer('${product.id}')">
            <h3>${product.name}</h3>
        </button>`
    });

    root.innerHTML = html
}

