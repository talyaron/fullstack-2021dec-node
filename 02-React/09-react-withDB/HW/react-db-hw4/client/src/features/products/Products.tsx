import { useEffect, useState, useCallback } from "react";
import axios from 'axios'
import { ProductCard } from './ProductCard'
import { Product } from './ProductModel'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Popup } from '../popup/Popup'
import { SetProduct } from '../admin/setProduct/SetProduct'
import { UpdateProduct } from "../admin/updateProduct/UpdateProduct";


interface ProductsProps {
  setShowAddPopup: Function;
  setShowUpdatePopup: Function;
  showUpdatePopup: boolean;
  showAddPopup: boolean;
}


export const Products: React.FC<ProductsProps> = ({ setShowAddPopup, showAddPopup, showUpdatePopup, setShowUpdatePopup }) => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);
  const [selectedProduct, setSelelctedProduct] = useState<Product|null>(null)

  useEffect(() => {
    // axios.get("/products/get").then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //     console.error(error);
    // })

    (async () => {
      const { data } = await axios.get("/products/get");
      console.log(data);

      const { products, error } = data;
      console.log(products)
      setProductsUI(products);
      console.log(products);
    })();

  }, []);

  // useEffect(() => {
  //   async function handleDelete(productID: string) {
  //     const { data } = await axios.delete("/products/delete", {
  //       data: { productID },
  //     });
  //     const { product } = data;
  //     console.log(data);
  //     setProductsUI(product);
  //   }

    

  // },[])

  async function handleDelete(productID: string) {
    try {
      const { data } = await axios.delete("/products/delete", {
        data: { productID },
      });
      const { product } = data;
      console.log(data);
      setProductsUI(product);

    } catch (error) {
      console.error(error);
    }
  }

  function handleAddNewCard() {
    try {
      setShowAddPopup(true);

    } catch (error) {
      console.error(error);
    }
  }

  const handleClosePopup = () => {
    try {
      setShowAddPopup(false);
      setShowUpdatePopup(false);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {productsUI.map((prd:Product) => {
        return (
          <ProductCard
            key={prd._id}
            product={prd}
            handleDelete={handleDelete}
            setShowUpdatePopup={setShowUpdatePopup}
            setSelelctedProduct={setSelelctedProduct}
          />
        );
      })}

      {showAddPopup && (
        <Popup handleClosePopup={handleClosePopup}>
          <SetProduct setShowAddPopup={setShowAddPopup} />
        </Popup>
      )}

      {showUpdatePopup && (
        <Popup handleClosePopup={handleClosePopup}>
          <UpdateProduct setShowUpdatePopup={setShowUpdatePopup}  selectedProduct={selectedProduct}/>
        </Popup>
      )}

      <span className="add-card-icon" onClick={handleAddNewCard}>
        <MdOutlineAddPhotoAlternate />
      </span>
    </div>
  );
};



