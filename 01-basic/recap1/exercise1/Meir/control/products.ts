export function getProduct(req, renderProducts){
     try {
        res.send({products})
     } catch (error) {
        console.error(error)
        res.send({error:error.message})
     }
}