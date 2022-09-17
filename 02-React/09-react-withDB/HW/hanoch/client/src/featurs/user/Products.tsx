import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { product } from './ProductsModel';
import { CardProducts } from './CardProducts';


export const Products =  () => {
    const [getProducts, setGetProducts] = useState<product[]>([])

    useEffect(()=>{
      
        axios.get("/api/products/get-product")
        .then((data:any)=>{
            // console.log(data.data.productDB);
            const {productDB, error} = data.data;
            setGetProducts(productDB)
            
            }).catch((err)=> console.error(err));
             
    },[])

    // console.log(getProducts);
  return (
    <div>
      
        {getProducts.map(product=><CardProducts key={product._id} product={product}/>)}
    </div>
  )
}
