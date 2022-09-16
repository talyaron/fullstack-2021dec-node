import {useState,useEffect, useRef} from 'react'
import { Product } from './productsModelC'
import './card.scss';
import axios from 'axios';

interface ProductCardProps{
    product:Product;
    handleDelete: Function;
    setDeleteItem: Function;
    setProductsUI:Function;
    setSelelctedProduct: Function;
    setUpdatePopUp:Function;
}

const ProductCard:React.FC<ProductCardProps> = ({setUpdatePopUp,setSelelctedProduct,product,setProductsUI,setDeleteItem,handleDelete}) => {
  const [priceColor, setPriceColor] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);
  const [updatePrice, setUpdatePrice] = useState<number>(product.price);

  useEffect(() => {
    
    if (product.price < 50) {
      setPriceColor("priceColor");

    } else {
      setPriceColor("aboveForty");
    }
    
  }, [priceColor]);
  

  function handleDeleteItem(){
    try {
      handleDelete(product._id);
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdatePrice = () => {
    try {
      if (!update) {
        setUpdate(!update);
      }
    } catch (error) {
      console.error(error);
    }
  };

    const handleUpdateProduct = () => {
      try {
        setUpdatePopUp(true);
        setSelelctedProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    async function handleSubmitPriceUpdate(
      e: React.FormEvent<HTMLFormElement> | any,
      productID: string
    ) {
      try {
        e.preventDefault();
        console.log(e, productID);
        const price = e.target.elements.price.valueAsNumber;
        setUpdatePrice(price);
  
        const { data } = await axios.patch("products/update-price", {
          productID,
          price,
        });
  
        console.log(price, data);
      } catch (error) {
        console.error(error);
      }
    }
    
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      try {
        inputRef.current?.focus();
      } catch (error) {
        console.error(error);
      }
    }, [update]);

  return (
 
      <div className='productCard'>
        <h3 className='header'>{product.title}</h3>
        <p className='par'>{product.price}</p>
        <img className='productCard__img' src={product.imgSrc} alt={product.title} onClick={handleUpdateProduct}/>
      

        <div>
        <p> {product.title} </p>
        <p className={`${priceColor}`}>{updatePrice}</p>
      </div>

      <div>
        <button onClick={handleDeleteItem}></button>

        <form
          onSubmit={(ev) => handleSubmitPriceUpdate(ev, product._id)}
        >
        {update && (
            <input
              type="number"
              name="price"
              defaultValue={updatePrice}
              onBlur={(e) => setUpdatePrice(e.target.valueAsNumber)}
              ref={inputRef}
            />
          )}
          <span onClick={() => {handleUpdatePrice()}}></span>
          <button className='productCard__delete' onClick={handleDeleteItem}></button>
          </form>
        </div>
    </div>
  );
};

export default ProductCard;