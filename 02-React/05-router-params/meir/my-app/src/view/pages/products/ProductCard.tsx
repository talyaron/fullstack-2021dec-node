import React, { FC } from 'react';
import { ProductsProps } from './Products';



export interface ProductCardProps{
     product:ProductsProps;
}

export const ProductCard:FC <ProductCardProps> = (props) => {
    const {product} = props;
  return (
    <div className='card'>
        <div className="card__info">
        <h3>{product.name}</h3>
        <p>{product.producer}</p>
        </div>
        <div className="card__price">
            {product.price}
        </div>
        <div className="card__img">
            <img src={product.img} alt="img" />
        </div>
    </div>
  )
}

export default ProductCard
