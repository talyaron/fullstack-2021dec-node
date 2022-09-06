import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './productCard';

export interface Product{
  name:string;
  price:number
  producer:string;
  img:string;
}


const products:Product[] = [
  {name:'Shirt' , price:200,  producer:'Nike' ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMECArKwCsyA9ElClob--ViXFYF-YqJXaarg&usqp=CAU"},
  {name:'Hat' , price:150,  producer:'Adidas',img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThJgaEHfwsIs6oTzxJOJjMmVbzFoFode7Wmxpz2_Cfl3-IjwftqO6uIzkQm6uP0Bi2OIB3UfzYHg&usqp=CAc"},
  {name:'Shoes' , price:300,  producer:'Lacoste',img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_fEUYJeyUDhQB5VpARhDqDToN8TLjcG7ijDyaUIAPB5j-q5ae5quoFnQhejW-ajDx2Zltp2gcJg&usqp=CAc"},
  {name:'Shirt' , price:220,  producer:'Clavin Klein',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjhu_uGkOvLSwpsJVZoHZomKMyLhrY6NZPQ&usqp=CAU"},
  {name:'Shirt' , price:400,  producer:'Boss',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3C2jddSECRw4HXvy1Ite_WpGGCdhBkCJnvK09sfLd49QhjdeQvwrWT3gtiDmZLwzPGw&usqp=CAU"},
  {name:'Shoes' , price:450,  producer:'Adidas',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ825Vlm87oXs3fQy66T3qJOjmkYAsTNqEaew&usqp=CAU"},
  {name:'Hat' , price:100,  producer:'Tommy',img:"https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/T07317s.jpg"}


]

const Products = () => {
  return (
    <div>
        <h2>Products:</h2>
        <Link to="/">HOME</Link>
        
        {products.map((product, i)=>{
          return<ProductCard key={i} product={product}/>
        })}
        
 </div>
  )
}

export default Products;