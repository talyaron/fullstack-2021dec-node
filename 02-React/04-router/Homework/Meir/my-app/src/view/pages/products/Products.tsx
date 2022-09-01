import { Link } from "react-router-dom";
import ProductCard from './productCard'

export interface Products {
   name:string,
   producer:string,
   price:number
}

const products: Products[] = [
  {name:'shoues', producer:'Hush Puppies', price:450},
  {name:'shoues', producer:'Hush Puppies', price:450},
  {name:'shoues', producer:'Hush Puppies', price:450},
  {name:'shoues', producer:'Hush Puppies', price:450},
  {name:'shoues', producer:'Hush Puppies', price:450}
]

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Go to Home</Link>
      {products.map((product, i)=>{
        return <ProductCard key={i} product={product} />
})}
    </div>
  );
};

export default Products;
