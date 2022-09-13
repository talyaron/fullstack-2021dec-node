import { FC, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../features/products/ProductCard";
import { Product } from "../../features/products/productsModelC";
import { Link } from "react-router-dom";
import React from "react";
import ModalCard from "../ModalCard/ModalCard";
import SetProduct from "../admin/setProduct/SetProduct";

interface ProductsProps {
  setDeleteItem: Function;
  setPopUpShown: Function;
  deleteItem: boolean;
  popUpShown: boolean;
}

const Products: FC<ProductsProps> = ({
  setDeleteItem,
  deleteItem,
  popUpShown,
  setPopUpShown,
}) => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products/get-products");
      console.log(data);
      const { products, error } = data;
      console.log(products, error);
      setProductsUI(products);
    })();
  }, [deleteItem]);

  async function handleDelete(productID: string) {
    try {
      const { data } = await axios.delete("/products/delete", {
        data: { productID },
      });
      const { product } = data;
      console.log(product);

      setDeleteItem(true);
    } catch (error) {
      console.error(error);
    }
  }

  function hidePopUpHandler() {
    try {
      setPopUpShown(true);
    } catch (error) {
      console.error(error);
    }
  }

  const showPopupHandler = () => {
    try {
      setPopUpShown(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/add-product">ADMIN</Link>
      {productsUI.map((prd) => (
        <ProductCard
          key={prd._id}
          product={prd}
          handleDelete={handleDelete}
          setDeleteItem={setDeleteItem}
          setProductsUI={setProductsUI}        />
      ))}

      {popUpShown && (
        <ModalCard hidePopUpHandler={hidePopUpHandler}>
          <SetProduct setPopUpShown={setPopUpShown} />
        </ModalCard>
      )}

      <span onClick={showPopupHandler}></span>
    </div>
  );
};

export default Products;
