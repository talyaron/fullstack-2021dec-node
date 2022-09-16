import { FC, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../features/products/ProductCard";
import { Product } from "../../features/products/productsModelC";
import { Link } from "react-router-dom";
import ModalCard from "../ModalCard/ModalCard";
import SetProduct from "../admin/setProduct/SetProduct";
import Update from '../admin/update/Update';

interface ProductsProps {
  setDeleteItem: Function;
  setPopUpShown: Function;
  deleteItem: boolean;
  popUpShown: boolean;
  setNewItem:Function;
  newItem:boolean;
  updatePopUp:boolean;
  setUpdatePopUp:Function;
  setUpdateItem:Function;
  updateItem:boolean;
}

const Products: FC<ProductsProps> = ({
  setDeleteItem,
  deleteItem,
  popUpShown,
  setPopUpShown,
  setNewItem,
  newItem,
  updatePopUp,
  setUpdatePopUp,
  setUpdateItem,
  updateItem,
}) => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);
  const [selectedProduct, setSelelctedProduct] = useState<Product>();

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
      setPopUpShown(false);
      setUpdatePopUp(false);
    } catch (error) {
      console.error(error);
    }
  }

  const showPopupHandler = () => {
    try {
      setPopUpShown(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/add-product">ADMIN</Link>
      {productsUI.map((prd) => {
        return(
        <ProductCard
          key={prd._id}
          product={prd}
          handleDelete={handleDelete}
          setDeleteItem={setDeleteItem}
          setProductsUI={setProductsUI} 
          setSelelctedProduct={setSelelctedProduct}
          setUpdatePopUp={setUpdatePopUp}
          />
      )})}

      {popUpShown && (
        <ModalCard hidePopUpHandler={hidePopUpHandler}>
          <SetProduct setPopUpShown={setPopUpShown} setNewItem={setNewItem} />
        </ModalCard>
      )}

{updatePopUp && (
        <ModalCard hidePopUpHandler={hidePopUpHandler}>
          <Update
            selectedProduct={selectedProduct}
            setProductsUI={setProductsUI}
            setUpdatePopUp={setUpdatePopUp}
            setUpdateItem={setUpdateItem}
          />
        </ModalCard>
      )}

      <span className='addPopup' onClick={showPopupHandler}></span>
    </div>
  );
};

export default Products;
