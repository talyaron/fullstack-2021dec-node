import React from "react";
import { Link } from "react-router-dom";

const Product = (props: any) => {
  const { product } = props;

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* <Link to={`/${product.name}`}>{product.name}</Link> */}
      <Link to={`/product/${product.name}`}>{product.name}</Link>
      <Link to={`/${product.price}`}>{product.price}</Link>
    </div>
  );
};

export default Product;
