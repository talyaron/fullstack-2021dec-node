function handleLoad(){
    try {
        helloServer()
    } catch (error) {
        console.log(error)
    }
}

async function helloServer(){
    try {
        //@ts-ignore
        const {data} = await axios.get('/clients/hello'); //rest-API

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}