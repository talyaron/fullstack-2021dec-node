import React from "react";
import axios from "axios";
import "../setProduct/SetProduct.scss";
import { Product } from "../../products/productsModel";

interface UpdateProductProps {
  setShowUpdatePopup: Function;
  selectedProduct: Product | null;
  setProductsUI: Function;
  setUpdatedItemRender: Function;
}

export const UpdateProduct: React.FC<UpdateProductProps> = ({
  setShowUpdatePopup,
  selectedProduct,
  setUpdatedItemRender,
}) => {
  async function handleSubmitCardUpdate(
    e: React.FormEvent<HTMLFormElement> | any
  ) {
    try {
      e.preventDefault();
      // definding ID
      const productID = selectedProduct?._id;
      console.log(e, productID);

      if (!productID) throw new Error("No Product Id");
      console.log(e);

      const elem = e.target.elements;
      const title = elem.title.value;
      const img = elem.img.value;
      const price = elem.price.valueAsNumber;
      const published = elem.published.checked;

      console.log(title, img, price, published);

      const { data } = await axios.patch("/products/update-card", {
        productID,
        title,
        img,
        price,
        published,
      });

      const { product } = data;
      setShowUpdatePopup(false);
      setShowUpdatePopup(false);

      console.log(product, product._id, data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmitCardUpdate(e)}>
        <input type="text" name="title" placeholder="Product Name" />
        <input type="text" name="img" placeholder="Product Source" />
        <input type="number" name="price" placeholder="Product Price" />
        <label>
          <input type="checkbox" name="published" />
        </label>
        <button>Update Product</button>
      </form>
    </div>
  );
};