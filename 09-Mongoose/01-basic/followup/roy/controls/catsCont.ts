import kittensModel from "../model/catsModel";
//import { kittensAray } from "../server";
export async function getkittens(req, res) {
  try {
   let kittenArray= kittensModel.find({age:{$gt:0}})
   .then(docs=> res.send(docs))
    .catch(err=>console.log(err.message));
    console.log(kittenArray)
    

  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function searchKitten(req, res) {
  try {
    const { age } = req.body
    
   // if(age!=Number)throw new Error;
   const choosen= kittensModel.find({age:age})
   .then(age=> res.send(age))
  // .catch(err=>console.log(err.message));
  
   
    

  } catch (error) {
    res.send({ error: error.message });
  }
}
