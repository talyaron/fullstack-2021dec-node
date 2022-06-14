

const addToCart = (ev, obj) => {
    console.log(ev, obj)
}

window.addEventListener("load", async () => {
    console.log('loaded')

    // load items from database
    const dbItems = await axios.get(`/items?from_date=2022-05-20`)
    console.log(dbItems.data)

    // render items
    const itemsToRender = dbItems.data.map(item => {
        return `<button class="item new-item" id="${item.id}"><img src="${item.image}" alt=""></button>`
    })
    const newItemContainer = document.getElementById('new-items-container');
    if(newItemContainer) {
        newItemContainer.innerHTML = itemsToRender;
            
        // add event listeners for items
        const items = document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', addItemToCart)
        }
    }


});

const addItemToCart = () => {
    console.log(`i am item`, this)

    // increase cart number
    const cart = document.getElementById('cart');
    if (cart) {
        const counter = parseInt(cart.innerText);
        console.log(counter)
        cart.innerText = `${counter + 1}`;
    }
}
