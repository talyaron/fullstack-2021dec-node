import react from "react"
import axios from "axios"
import {useState} from "react"
import {SetProduct} from "../admin/setProduct"
import { InterfaceProduct } from "../user/productCard"

interface buttonProps{
    product:InterfaceProduct
}
export const  EditButton = ({product}:buttonProps) => {
    const [displayEdit, setDisplayEdit] = useState<boolean>(true);
    function handleEdit(){
        setDisplayEdit(false)
    }
    if (displayEdit == true){
        return (
            <button onClick={handleEdit}>edit</button>
        )
    }
    else{
        return (
            <SetProduct title={product.title} price={product.price}/>
        )
    }
    
}


//title={title} price={price} img={img} description={description}