
async function handleProduct(ev:any) {
    try {
        ev.preventDefault();
        const product = ev.target.product.value;
        const price = ev.target.price.value;
        //@ts-ignore
        const {data} = await axios.post('/users/products', {product, price});
        
        displayProducts()
        
    } catch (error) {
        console.log(error);
        
    }
    }

    async function displayProducts(){
        try {
            //@ts-ignore
            const {data} = await axios.get('/users/disProducts');
            console.log(data);
            const root = document.querySelector('#root');
            let html = '';
            data.forEach(item => {
                html += `<h1>${item.product}</h1>
                        <h1>price:${item.price}</h1>`
            });
            root.innerHTML = html
            
        } catch (error) {
           console.log(error);
            
        }

    }