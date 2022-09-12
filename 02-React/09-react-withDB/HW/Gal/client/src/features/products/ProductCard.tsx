import React,{FC} from 'react'
import { Product } from './productsModelC'
import './card.scss'


interface ProductCardProps{
    product:Product;
    handleDelete: Function;
    setDeleteItem: Function;
}

const ProductCard:FC<ProductCardProps> = ({product, handleDelete}) => {
  function handleDeleteItem(){
    try {
      handleDelete(product._id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
 
      <div className='productCard'>
        <h3 className='header'>{product.title}</h3>
        <p className='par'>{product.price}</p>
        <img className='productCard__img' src={product.imgSrc} alt={product.title} />
        <div>
          <button className='productCard__delete' onClick={handleDeleteItem}></button>
        </div>
    </div>
  )
}

export default ProductCard