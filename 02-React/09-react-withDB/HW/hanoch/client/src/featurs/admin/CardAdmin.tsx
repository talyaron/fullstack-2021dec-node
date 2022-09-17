import React, { FC } from 'react';
import { product } from '../user/ProductsModel';
import {deleteProduct} from './SetDelete';
import {displayWindow, sendId} from './setUpdate'

interface CardAdminProps{
    product:product
}

export const CardAdmin:FC<CardAdminProps> = ({product}) => {

 
  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.imgSrc} alt={product.title} />
        <h2>{product.price}</h2>
        <button onClick={()=>{displayWindow(true); sendId(product._id)}} >update </button>
        <button onClick={()=> deleteProduct(product._id)} >delete</button>
    </div>
  )
}