import React, { FC } from 'react';
import {product} from '../user/ProductsModel'
interface AdminCardProps{
    product:product
}

export const CardAdmin:FC<AdminCardProps> = ({product}) => {

    function handleUpdate(){

    }

    function handleDelete(){
        
    }

  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.imgSrc} alt={product.title} />
        <h2>{product.price}</h2>
        <button onClick={handleUpdate} >update </button>
        <button onClick={handleDelete} >delete</button>
    </div>
  )
}
