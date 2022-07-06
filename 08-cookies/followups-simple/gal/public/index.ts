function handleLoad(){
    try {
        getServer()
    } catch (error) {
        console.log(error)
    }
}

async function getServer() {
    try {
        // @ts-ignore
        const {data} = await axios.get('/users/cookie');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}