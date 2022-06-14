function handleGetUser1(){
    
    try {
        console.log('get user 4');
        axios.get('/api/user1').then(results=>{
            console.log(results);
        })
    } catch (error) {
        console.error(error);
    }
}