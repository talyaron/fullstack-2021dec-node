import React, { useEffect, useState } from 'react';
import { product } from '../user/ProductsModel';
import axios from 'axios';
import { CardAdmin } from './CardAdmin';

export const DisplayCardAdmin = () => {
    const [productManage, setProductManage] = useState<product[]>([])
    useEffect( ()=>{
        (async ()=>{
           const {data} = await axios.get("/api/products/get-product");
           const {productDB, error} = data;
           console.log(data);
           
           console.log(productDB);
           
           setProductManage(productDB)
            })()
        
    },[])
  return (
    <div>
        {productManage.map((product)=>{
           return <CardAdmin key={product._id} product={product}/>
        })}
    </div>
  )
}
