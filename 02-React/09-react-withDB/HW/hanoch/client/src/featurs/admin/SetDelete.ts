import axios from "axios"


export async function deleteProduct(id:string){
  try {
    const {data} = await axios.delete('/api/products/delete-product',  {data:{id}})
    console.log(data);
    
  } catch (error) {
    console.error(error)
  }
}



