import Product from "../Components/Nav/Product";

export const productList = [
  { name: "Apple", price: 123 },
  { name: "Orange", price: 544 },
  { name: "Lemon", price: 147 },
  { name: "Banana", price: 654 },
];
const Products = () => {
  return (
    <div>
      {productList.map((item) => (
        <Product product={item} />
      ))}
    </div>
  );
};

export default Products;
