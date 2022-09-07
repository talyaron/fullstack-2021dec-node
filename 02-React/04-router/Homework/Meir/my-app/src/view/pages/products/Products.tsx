import { Link } from "react-router-dom";
import ProductCard from './productCard'

export interface Products {
   id:string
   name:string,
   producer:string,
   price:number,
   img:string
}

const products: Products[] = [
  {id:'12',name:'Shoes', producer:'Yves Saint Laurent', price:450, img:"https://n.nordstrommedia.com/id/sr3/733d3d2f-c1f7-4599-b66f-1bfce84f65ec.jpeg?h=365&w=240&dpr=2"},
  {id:'123',name:'Pants', producer:'Yves Saint Laurent', price:950, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_iDZ6MUGMUtOJbq_Pi4jGAePD1PjenzUlA&usqp=CAU"},
  {id:'1234',name:'Elegant Shirts', producer:'Yves Saint Laurent', price:350, img:"https://cdn.modesens.com/product/509700_100?w=400&"},
  {id:'12345',name:'Jackets', producer:'Yves Saint Laurent', price:450, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60uy8Kn9VrOAFxwDptSWmkZaWN-VE2mcB6TXgH2VY_CiYsbT3aB01L0MjnHNG0j6GQ1g&usqp=CAU"},
  {id:'123456',name:'Belts', producer:'Yves Saint Laurent', price:450, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-inMpRVzN8eCCxiKZoxm50Dh6FNAfTslIa_o_FqTb9i066M2q1kzfHmYgsImfGSP1HI&usqp=CAU"}
]

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Go to Home</Link>
      {products.map((product, i)=>{
        return <Link to={`/product/${product.id}`}><ProductCard key={i} product={product} /></Link>
})}
    </div>
  );
};

export default Products;
