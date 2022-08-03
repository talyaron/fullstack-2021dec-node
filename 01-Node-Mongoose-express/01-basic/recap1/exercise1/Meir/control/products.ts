const products = [{id:'ettreyer', name:'test'}]

export function getProducts(req, res){

     try {
        res.send({products})
     } catch (error) {
        console.error(error)
        res.send({error:error.message})
     }
}