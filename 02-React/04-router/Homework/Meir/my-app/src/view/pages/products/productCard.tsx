import React  from 'react';
import { Products } from './Products';
import { FC } from 'react';


interface ProductCardProps{
     product:Products;
}

const productCard:FC <ProductCardProps> = (props) => {
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
    </div>
  )
}

export default productCard
