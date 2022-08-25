import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export interface Product{
  id:string;
  name:string,
  producer:string,
  price:number
}

export const products:Product[] = [
  {id:'Nike PR', name:'Hapoel Tel Aviv',producer:"Nike", price:150},
  {id:'AirJr PR',name:'MJ 23',producer:"Air Jordan", price:500},
  {id:'Adidas PR',name:'Messi',producer:"Adidas", price:250},
  {id:'Puma PR',name:'Shit Comapny',producer:"Puma", price:120},
 
]

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Go to Home</Link>
      {products.map((product)=>{
        return <Link to={`/product/${product.id}`}><ProductCard key={product.id} product={product}/></Link>
      })}
    </div>
  );
};

export default Products;
