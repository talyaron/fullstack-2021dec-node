function handleLoad(){
    try {
        setHelloServer()
    } catch (error) {
        
    }
}


async function setHelloServer() {
    try {
        // debugger
        // @ts-ignore
        const {data}  = await axios.get('/clients/start')
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
  
    
}