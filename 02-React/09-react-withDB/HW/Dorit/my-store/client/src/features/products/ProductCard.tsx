import React,{FC} from 'react'
import { Product } from './productsModelC'



interface ProductCardProps{
    product:Product
}

const ProductCard:FC<ProductCardProps> = ({product}) => {
  return (
    <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.imgSrc} alt={product.title} />
    </div>
  )
}

export default ProductCard