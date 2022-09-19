import React, { FC, createContext } from 'react';
import { product } from '../user/ProductsModel';
import {deleteProduct} from './SetDelete';

interface CardAdminProps{
    product:product,
    setDisplayWindow:Function,
    setId:Function
}

export const CardAdmin:FC<CardAdminProps> = ({product, setDisplayWindow, setId}) => {
  // const { setCopy } = useGlobalContext()

  //isEdit state
  const display= () =>{
    setId(product._id)
    setDisplayWindow(true)
  };
  function delete1(){
    
    deleteProduct(product._id)
    window.location.reload()
  }

  
  return (
    
    <div>
        <h2>{product.title}</h2>
        <img src={product.imgSrc} alt={product.title} />
        <h2>{product.price}</h2>
        <button onClick={() =>{ display()}} >update </button>
        <button onClick={() => delete1()} >delete</button>
    </div>
  )
}