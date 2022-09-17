import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SetProduct = () => {
  
  
    async function handleSubmit(ev: any) {
    try {
      ev.preventDefault();
      console.log("add");

      const elm = ev.target.elements;
      const title = elm.title.value;
      const imgSrc = elm.imgSrc.value;
      const price = elm.price.valueAsNumber;
      const publish = elm.publish.checked;

      console.log(title, imgSrc, price, publish);

      const { data } = await axios.post("/api/products/add-product",{title, imgSrc, price, publish});
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        <Link to='/'>Products</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="product name" />
        <input type="text" name="imgSrc" placeholder="img url" />
        <input type="number" name="price" placeholder="price" />
        <label htmlFor="publish">Publish</label>
        <input type="checkbox" name="publish" id="publish" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default SetProduct;
