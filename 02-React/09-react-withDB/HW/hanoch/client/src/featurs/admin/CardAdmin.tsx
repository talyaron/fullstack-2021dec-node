import React, { FC } from 'react';
import { product } from '../user/ProductsModel';
import {deleteProduct} from './SetDelete'

interface CardAdminProps{
    product:product
}

export const CardProducts:FC<CardAdminProps> = ({product}) => {

  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.imgSrc} alt={product.title} />
        <h2>{product.price}</h2>
        {/* <button onClick={} >update </button> */}
        <button onClick={()=> deleteProduct(product._id)} >delete</button>
    </div>
  )
}