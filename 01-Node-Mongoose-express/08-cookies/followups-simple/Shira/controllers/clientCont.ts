export async function setStart(req, res){
try {
    console.log(req.headers)

    const {clientId} = req.cookies;
    console.log(clientId);

    if(clientId){
        console.log(`client with id:${clientId} returned`);
        
    }

    else{
        res.cookie('clientId' , Math.floor(Math.random()*10000))
        console.log('New User Added');
        
    }
    res.send({ok:true})
    
}
 catch (error) {
    res.send({ error: error.message });
}
}