import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "./productsModelC";
import { Link } from "react-router-dom";

const Products = () => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/api/products/get-products")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));

    (async () => {
      const { data } = await axios.get("/api/products/get-products");
      console.log(data);
      const { products, error } = data;
      console.log(products, error);
      setProductsUI(products);
    })();
  }, []);
  async function updateProduct(ev: any) {
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
  return <div>
    <Link to='/add-product' >ADMIN</Link>
    {productsUI.map(prd=><ProductCard key={prd._id} product={prd}/>)}
    <button onClick={updateProduct}>Update</button>
  </div>;
};

export default Products;
