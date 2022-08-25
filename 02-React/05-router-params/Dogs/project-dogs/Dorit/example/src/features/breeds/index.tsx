import React, { useEffect, useState } from "react";
import { getBreeds } from "./getBreeds";
import { Link } from "react-router-dom";
import BreedCard from "./BreedCard";
export interface Breed {
  id: number;
  name: string;
  
}

const Breeds:Breed[] = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    getBreeds().then((brds) => {
      if (brds) {
        console.log(brds)
        setBreeds(brds);
      }
    });
  }, []);
  const Breeds:Breed[]
    return (
      <div>
        <h1>Breeds</h1>
        {breeds.map((breed) => {
          return (
            <Link to={`/breed/${breed.id}`}>
              <BreedCard key={breed.name} breed={breed.name} />
            </Link>
          );
        })}
      </div>
    );
  };
  export interface Product {
    id: string;
    name: string;
    producer: string;
    price: number;
  }
  
  export const products: Product[] = [
    { id: "12256546334", name: "aaa", producer: "Nike", price: 120 },
    { id: "1223etr34", name: "bb", producer: "Nike", price: 120 },
    { id: "12233rt4", name: "cc", producer: "Nike", price: 120 },
    { id: "12rt2334", name: "aaa", producer: "Nike", price: 120 },
    { id: "1223rtdrt34", name: "aaa", producer: "Nike", price: 120 },
    { id: "1223rt34", name: "aaa", producer: "Nike", price: 120 },
    { id: "12rtert2334", name: "aaa", producer: "Nike", price: 120 },
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
  
  


export default Breeds;
