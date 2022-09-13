import {useState,useEffect} from 'react'
import { Product } from './productsModelC'
import './card.scss';


interface ProductCardProps{
    product:Product;
    handleDelete: Function;
    setDeleteItem: Function;
    setProductsUI:Function;
}

const ProductCard:React.FC<ProductCardProps> = ({product,setProductsUI,setDeleteItem,handleDelete}) => {
  const [priceColor, setPriceColor] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);

  
  function handleDeleteItem(){
    try {
      handleDelete(product._id);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    if (product.price < 50) {
      setPriceColor("priceColor");

    } else {
      setPriceColor("aboveForty");
    }

  }, [priceColor]);

  const handleUpdatePrice = () => {
    try {
      if (!update) {
        setUpdate(!update);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
 
      <div className='productCard'>
        <h3 className='header'>{product.title}</h3>
        <p className='par'>{product.price}</p>
        <img className='productCard__img' src={product.imgSrc} alt={product.title} />
        <div>
          <span onClick={handleUpdatePrice}></span>
          <button className='productCard__delete' onClick={handleDeleteItem}></button>
        </div>
    </div>
  )
}

export default ProductCard