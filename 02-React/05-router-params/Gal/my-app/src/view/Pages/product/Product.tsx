import { Link, useParams } from "react-router-dom";
import { Product } from "../products/Products";

import { products } from "../products/Products";

const ProductPage = () => {
  const { productId } = useParams();
  const product = getProduct(productId, products);

  return (
    <div>
      <Link to="/products">Back</Link>
      <h1> Product ID: {product ? product.id : null}</h1>
    </div>
  );
};

export default ProductPage;

function getProduct(
  productId: string | undefined,
  products: Product[]
): Product | undefined {
  if (productId) {
    return products.find((prd) => prd.id === productId);
  } else {
    return undefined;
  }
}
