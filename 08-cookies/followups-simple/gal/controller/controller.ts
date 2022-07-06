export async function getCookie(req,res) {
    try {
       const {id} = req.cookies;
       console.log(id);

       if(id){
        console.log(`client ${id} is here!`)
       }else{
        res.cookie("id",Math.floor(Math.random()*100000))
        console.log('New User is born!');
    }
    res.send({ok:true});
    } catch (error) {
        res.send({ error: error.message });
      }
}