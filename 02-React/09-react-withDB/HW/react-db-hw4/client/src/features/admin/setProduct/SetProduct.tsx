import React from "react";
import axios from "axios";



interface SetProductProps {
  setShowAddPopup: Function
}


export const SetProduct: React.FC<SetProductProps> = ({ setShowAddPopup }) => {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    try {
      e.preventDefault();

      const elem = e.target.elements;
      const title = elem.title.value;
      const img = elem.img.value;
      const price = elem.price.valueAsNumber;
      const published = elem.published.checked;

      console.log(title, img, price, published);

      const { data } = await axios.post("/products/add", {
        title,
        img,
        price,
        published,
      });

      setShowAddPopup(false)

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Product Name" />
        <input type="text" name="img" placeholder="Product Source" />
        <input type="number" name="price" placeholder="Product Price" />
        <label>
          <input type="checkbox" name="published" />
        </label>

        <button>Add Product</button>
      </form>
    </div>
  );
};
