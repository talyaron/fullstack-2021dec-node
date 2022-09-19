import React, { useState } from "react";
import { products } from "../../data/products";
import Buttom from "../Components/Buttom";
import ProductComponent from "../Components/Product";

const HomePage = () => {
  const [number, setNumber] = useState<number>(3);

  return (
    <div>
      <div>{number}</div>
      <h1>Products</h1>
      <div>
        {products.map((item, index) => (
          <ProductComponent item={item} index={index} setNumber={setNumber} />
        ))}
      </div>
      <Buttom setNumber={setNumber} />
    </div>
  );
};

export default HomePage;
