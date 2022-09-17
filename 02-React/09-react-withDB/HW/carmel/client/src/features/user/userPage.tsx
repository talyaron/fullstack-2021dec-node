import React, { useEffect, useState } from "react";
import axios from "axios"
import { UserNav } from "./userNav";
import { Link } from "react-router-dom"
import { InterfaceProduct, ProductCard } from "./productCard";

export const UserPage = () => {
    const [productArray, setProductArray] = useState([])
    useEffect(()=>{
        axios
        .get('/api/products/getProducts')
        .then((data)=>{
            setProductArray(data.data.data)
            console.log(data.data.data)
        })
        .catch(err=>console.error(err))
    },[])
    function handleAddToCart(ev:any){
        console.log(ev.target.classList[0])
        axios
            .post('/api/userCarts/addProductToCart')
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>console.error(err))
    }
    return (
        <div >
            <div className="rapper">
                <Link to="/" className="linkBack">Back</Link>
                {productArray.map((object:InterfaceProduct) =>{
                    return (
                        <div>
                            <ProductCard product={object} key={object._id}/>
                            <button className={object._id} onClick={handleAddToCart}>add to cart</button>
                        </div>
                          )
                })}
            </div>
            <UserNav/>
        </div>
    );
}