import { FC, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from '../../features/products/ProductCard';
import { Product } from "../../features/products/productsModelC";
import { Link } from "react-router-dom";
import React from "react";

interface ProductsProps{
  setDeleteItem: Function;
  deleteItem: boolean;
}

const Products:FC<ProductsProps> = ({setDeleteItem, deleteItem}) => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);
  // const [popUpShown, setPopUpShown] = useState<boolean>(false);

  // const showCartHandler = () => {
  //   setPopUpShown(true);
  // };

  // const hideCartHandler = () => {
  //   setPopUpShown(false);
  // };

  useEffect(() => {
    
    (async () => {
      const { data } = await axios.get("/api/products/get-products");
      console.log(data);
      const { products, error } = data;
      console.log(products, error);
      setProductsUI(products);
    })();
  }, []);

  async function handleDelete(productID: string) {    
    try {
      const { data } = await axios.delete("/products/delete", {
        data: { productID },
      });
      const { product } = data;
      console.log(data);

      setDeleteItem(true);
    } catch (error) {
      console.error(error);
    }
  }


  return <div>
    <Link to='/add-product' >ADMIN</Link>
    {productsUI.map(prd=><ProductCard key={prd._id} product={prd} handleDelete={handleDelete} setDeleteItem={setDeleteItem}/>)}
  </div>;
};

export default Products;




