import React, { FC } from 'react';
import { product } from './ProductsModel';

interface ProductCardProps{
    product:product
}

export const CardProducts:FC<ProductCardProps> = ({product}) => {
  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.imgSrc} alt={product.title} />
        <h2>{product.price}</h2>
    </div>
  )
}
