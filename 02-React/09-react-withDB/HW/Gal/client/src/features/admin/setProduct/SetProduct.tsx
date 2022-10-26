import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface SetProductsProps{
  setPopUpShown:Function;
  setNewItem:Function;
}

const SetProduct:React.FC<SetProductsProps> = ({setPopUpShown, setNewItem}) => {
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

      const { data } = await axios.post("/api/products/add-product",  {title, imgSrc, price, publish});

      setNewItem(true);
      setPopUpShown(false);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="Links">
        <h1><Link to="/add-product">This page: ADMIN</Link></h1>
        <Link to='/'>Go to: Products Page</Link>
        </div>
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
