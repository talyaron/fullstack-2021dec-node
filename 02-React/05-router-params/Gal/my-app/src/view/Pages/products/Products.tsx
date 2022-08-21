import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export interface Product {
  id: string;
  name: string;
  producer: string;
  price: number;
}

export const products: Product[] = [
  { id: "12256546334", name: "aaa", producer: "abibas", price: 220 },
  { id: "4223etr34", name: "bb", producer: "abibas", price: 220 },
  { id: "42233rt4", name: "cc", producer: "abibas", price: 220 },
  { id: "42rt2334", name: "aaa", producer: "abibas", price: 220 },
  { id: "4223rtdrt34", name: "aaa", producer: "abibas", price: 220 },
  { id: "4223rt34", name: "aaa", producer: "abibas", price: 220 },
  { id: "42rtert2334", name: "aaa", producer: "abibas", price: 220 },
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Go to Home</Link>
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
