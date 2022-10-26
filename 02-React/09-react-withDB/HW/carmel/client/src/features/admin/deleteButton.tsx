import react from "react"
import axios from "axios"
import {useState} from "react"
import {SetProduct} from "../admin/setProduct"
import {InterfaceProduct } from "../user/productCard"
interface buttonProps{
    product:InterfaceProduct
}
export const  DeleteButton = ({product}:buttonProps) => {
    async function handleDelete(ev:any){
        console.log(product._id)
        const { data } = await axios.post("/api/products/deleteProduct",{product})
        console.log(data)
    }
    return(
        <button onClick={handleDelete}>delete</button>
   )
    
}