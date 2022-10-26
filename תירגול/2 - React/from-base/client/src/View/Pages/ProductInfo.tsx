import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  item: string;
  price: number;
  _id: string;
}

const ProductInfo = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState<Product>({
    item: "",
    price: 0,
    _id: "",
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/product/get-one-product", { id });
      //   console.log(data);
      setProduct(data);
    })();
  }, [id]);

  return (
    <div>
      <p>{product.item}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductInfo;
