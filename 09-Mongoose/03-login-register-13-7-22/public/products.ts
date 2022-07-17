function handleLoad(){
    try {
        getMyProducts()
    } catch (error) {
        console.error(error)
    }
}

async function getMyProducts(){
    try {
       //@ts-ignore 
       const {data} = await axios.get('/products/get-my-products');
       console.log(data)
    } catch (error) {
        console.error(error)
    }
}