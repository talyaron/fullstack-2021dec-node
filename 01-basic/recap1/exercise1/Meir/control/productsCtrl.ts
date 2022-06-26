import uid from "./helpers";

interface Product{
   id:string;
   name:string;
}
const products:Array<Product> = [{id:'ettreyer', name:'test'}]

export function getProducts(req, res){

     try {
        res.send({products})
     } catch (error) {
        console.error(error)
        res.send({error:error.message})
     }
}

export function addProduct(req, res){
    try {
      const {name} = req.body;
      if(!name) throw new Error('Name of product is require');
      const id = uid();
      if(!id) throw new Error('Id is missing');

      products.push({name, id});
    } catch (error) {
      console.error(error)
      res.send({error:error.message})
    }
}