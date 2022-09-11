import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { product } from './ProductsModel';
import { CardProducts } from './CardProducts';

export const Products = () => {
    const [getProducts, setGetProducts] = useState<product[]>([])
    useEffect(()=>{
        axios.get("/api/products/get-product")
        .then((data:any)=>{
            console.log(data);
            const {product, error} = data;
            setGetProducts(product)
            }).catch((err)=> console.error(err));
            
    },[])
  return (
    <div>
        {getProducts.map(product=><CardProducts key={product._id} product={product}/>)}
    </div>
  )
}
