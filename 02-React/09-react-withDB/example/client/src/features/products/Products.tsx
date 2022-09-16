import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "./productsModelC";
import { Link } from "react-router-dom";

const Products = () => {
  const [productsUI, setProductsUI] = useState<Product[]>([]);

  useEffect(() => {
    // axios
    //   .get("/api/products/get-products")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.error(err));

    (async () => {
      const { data } = await axios.get("/api/products/get-products");
      console.log(data);
      const { products, error } = data;
      console.log(products, error);
      setProductsUI(products);
    })();
  }, []);
  return <div>
    <Link to='/add-product' >ADMIN</Link>
    {productsUI.map(prd=><ProductCard key={prd._id} product={prd}/>)}
  </div>;
};

export default Products;
