import React from "react";
import axios from "axios";

export interface InterfaceProduct{
    _id:string,
    title:string,
    price:string,
    img:string,
    description:string
}
interface ProductCardProps{
    product: InterfaceProduct
}
export const ProductCard = ({product}:ProductCardProps) => {
    return (
        <div className="productCard"> 

            <h3>{product.title}</h3>
            <h6>{product.price}</h6>
            <h6>dollars</h6>

            <h6>{product.description}</h6>
            <img src={product.img} alt="" />
            
        </div>
    );
}