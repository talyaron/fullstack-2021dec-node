function handleLoad(){
    try {
        iamAServer()
    } catch (error) {
        console.log(error)
    }
}

async function iamAServer(){
    try {
        //@ts-ignore
        const {data} = await axios.get('/clients/hello'); //rest-API

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}