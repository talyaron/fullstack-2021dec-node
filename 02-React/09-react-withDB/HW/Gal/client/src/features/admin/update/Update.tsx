import { FC, FormEvent } from "react";
import { Product } from "../../products/productsModelC";
import axios from 'axios';

interface UpdateProps{
    setUpdatePopUp: Function;
    setProductsUI: Function;
    selectedProduct: Product;
    setUpdateItem: Function;
}


const Update:FC<UpdateProps> = ({setUpdatePopUp, selectedProduct,setUpdateItem}) => {
    async function submitUpdateHandler(ev:FormEvent<HTMLFormElement>|any) {
        try {
            ev.preventDefault();
            const productID = selectedProduct._id;
            console.log(productID);
            if(!productID) throw new Error ('Data didnt Update => Wrong ID')
             
            const title = ev.target.elements.title.value; 
            const img = ev.target.elements.img.value; 
            const price = ev.target.elements.price.valueAsNumber; 
            const published = ev.target.elements.published.checked; 
            const cardConst = {title,published,img,price}
             console.log(cardConst) //just for my play
            console.log(title,published,img,price)

            const {data} = await axios.patch('/products/update',{productID,cardConst});
            const {product} = data;
            setUpdatePopUp(false);
            setUpdateItem(true);

            console.log(product, product._id)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <form className="form" onSubmit={(ev) => submitUpdateHandler(ev)}>
            <input type="text" name="title" placeholder="Product Name" />
            <input type="text" name="img" placeholder="Product Source" />
            <input type="number" name="price" placeholder="Product Price" />
            <button>Update Product</button>
        </form>
    </div>
  )
}

export default Update