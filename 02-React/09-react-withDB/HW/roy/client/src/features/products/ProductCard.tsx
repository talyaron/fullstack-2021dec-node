import React,{FC} from 'react'
import { Product } from './productsModelC'



interface ProductCardProps{
    product:Product
}

const ProductCard:FC<ProductCardProps> = ({product}) => {
  return (
    <div className="grid__card">
      <img className="grid__card__img" src={product.imgSrc} alt={product.title} />
        <h3 className="grid__card__text" >{product.title}</h3>
        <p className="grid__card__text" >{product.price}</p>
        
        
    </div>
  )
}

export default ProductCard

