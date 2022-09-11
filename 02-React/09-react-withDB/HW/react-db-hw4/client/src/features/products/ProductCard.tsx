import React, { useState, useEffect, useRef } from "react";
import { Product } from "./ProductModel";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from 'axios'

interface ProductCardProps {
  product: Product;
  handleDelete: Function;
  setShowUpdatePopup: Function;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, handleDelete, setShowUpdatePopup }) => {
  const [priceColor, setPriceColor] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);
  const [updatePrice, setUpdatePrice] = useState<number>();



  // DELETE
  function handleDeleteItem() {
    try {
      handleDelete(product._id);
    } catch (error) {
      console.error(error);
    }
  }



  // SET PRICE COLOR
  let className = priceColor;

  if (product.price < 50) {
    className = "priceColor";
  } else {
    className = "aboveForty";
  }



  // UPDATE HOLE CARD
  const handleUpdateProduct = () => {
    try {
      setShowUpdatePopup(true);
    } catch (error) {
      console.error(error);
    }
  };



  // UPDATE CHECK
  const handleUpdatePrice = () => {
    try {
      if (!update) {
        setUpdate(!update);
        console.log("cliked");
      }
    } catch (error) {
      console.error(error);
    }
  };



  // PRICE UPDATE DB
  async function handleSubmitPriceUpdate(e: React.FormEvent<HTMLFormElement> | any, productID: string ) {
    try {
      e.preventDefault();
      console.log(e, productID);

      const price = e.target.elements.price.valueAsNumber;
      const { data } = await axios.patch("products/update-price", {
        productID,
        price,
      });

      console.log(price, data);

      setUpdatePrice(updatePrice);
    } catch (error) {
      console.error(error);
    }
  }




  // INPUT FOCUS
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    try {
      inputRef.current?.focus();
    } catch (error) {
      console.error(error);
    }
  }, [update]);



  return (
    <div className="card">
      <img
        className="card__img"
        src={product.img}
        alt={`${product.title}`}
        onClick={handleUpdateProduct}
      />

      <div className="card__details">
        <p className="card__details--title">
          <span className="card__details--span">Title:</span> {product.title}
        </p>
        <p className={`${className}`}>
          <span>&#8362;</span> {product.price}
        </p>
      </div>

      <div className="card__btn">
        <span className="card__btn--del" onClick={handleDeleteItem}>
          <RiDeleteBin5Line />
        </span>

        <form
          className="catd__btn--update"
          onSubmit={(e) => handleSubmitPriceUpdate(e, product._id)}
        >
          {update && (
            <input
              className="update-input"
              type="number"
              name="price"
              value={updatePrice}
              onBlur={(e) => setUpdatePrice(e.target.valueAsNumber)}
              ref={inputRef}
            />
          )}


          <span
            className="update-icon"
            onClick={() => {
              handleUpdatePrice();
            }}
          >
            <AiOutlineEdit />
          </span>
        </form>
      </div>
    </div>
  );
};
