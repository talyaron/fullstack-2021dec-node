import { FC } from "react";
import { Product } from "./Products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <div className="card__info">
        <h3>{product.name}</h3>
        <p>{product.producer}</p>
      </div>
      <div className="card__price">{product.price}</div>
    </div>
  );
};

export default ProductCard;
