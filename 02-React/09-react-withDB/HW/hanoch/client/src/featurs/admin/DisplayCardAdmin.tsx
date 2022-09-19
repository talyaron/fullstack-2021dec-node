import React, { FC, useEffect, useState } from 'react';
import '../../styles/admin/display.scss'
import { product } from '../user/ProductsModel';
import axios from 'axios';
import { CardAdmin } from './CardAdmin';

export const DisplayCardAdmin:FC<{setDisplayWindow:Function, setId:Function}> = ({setDisplayWindow, setId}) => {
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
    <div className='proManag'>
        {productManage.map((product)=>{
           return <CardAdmin key={product._id} setDisplayWindow={setDisplayWindow} setId={setId} product={product}/>
        })}
    </div>
  )
}
