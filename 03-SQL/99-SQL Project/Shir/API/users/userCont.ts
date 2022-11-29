export function register(req, res){
    try {
        res.send({ok:true})
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.message})
    }
}