export async function setHello(req, res) {
    try {
        
        console.log(req.cookie)
        
        const { id } = req.cookies;
        console.log(id);
        
        if (id) {
            console.log(`Client with id ${id} returned!!!!`);
            //save some data on name2
          } else {
            res.cookie("id", Math.floor(Math.random() * 10000000));
            console.log("we have new user!!!!");
          }
          res.send({ ok: true }); //Sets name = express

    } catch (error) {
        res.send({ error: error.message });
    }  
};