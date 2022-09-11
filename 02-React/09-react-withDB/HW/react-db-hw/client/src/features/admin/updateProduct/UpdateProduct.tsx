import React from 'react'
import axios from "axios";
import '../setProduct/SetProduct.scss';


interface UpdateProductProps {
  setShowUpdatePopup: Function;
}

export const UpdateProduct: React.FC<UpdateProductProps> = ({ setShowUpdatePopup }) => {

  async function handleSubmitCardUpdate(e: React.FormEvent<HTMLFormElement> | any, productID: string) {
    try {
      e.preventDefault();
      console.log(e, productID);

      const elem = e.target.elements;
      const title = elem.title.value;
      const img = elem.img.value;
      const price = elem.price.valueAsNumber;
      const published = elem.published.checked;

      console.log(title, img, price, published);

      const { data } = await axios.patch("/products/update-card", {
        title,
        img,
        price,
        published,
        productID,
      });

      const {product} = data;

      console.log(product, product._id, data);

      setShowUpdatePopup(false);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => handleSubmitCardUpdate(e, product._id)}
      >
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


