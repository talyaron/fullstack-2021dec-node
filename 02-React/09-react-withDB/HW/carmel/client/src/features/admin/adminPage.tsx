import React from "react";
import { SetProduct } from "./setProduct";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import {InterfaceProduct, ProductCard} from "../user/productCard"
import { EditButton } from "../editButton";
import { DeleteButton } from "./deleteButton";
import { UserNav } from "../user/userNav";

export const AdminPage = () => {
    // const [error, setError] = useState<string | null>(null);
    // const [loginCorrect, setLoginCorrect] = useState<boolean>(false);
    // async function handleLogin(ev: any) {
    //     ev.preventDefault();
    //     try {
    //         const emailInput = ev.target.form[0].value
    //         const passwordInput = ev.target.form[1].value
    //         const { data } = await axios.post('/api/admins/getAdmins', emailInput, passwordInput)
    //         console.log(data)
    //         const admins= data.data
    //         if(admins.find((admin)=>admin.password===password)){
    //             setLoginCorrect(true)
    //         }
    //     } 
    //     catch (error) {
    //       console.error(error);
    //     }
    // }
    // function handleLogin(ev:any){
    //     const emailInput = ev.target.form[0].value
    //     const passwordInput = ev.target.form[1].value
    //     console.log(ev)
    // }
    // const [adminArray, setAdminArray] = useState([])
    // useEffect(()=>{
    //     axios
    //     .get('/api/admins/getAdmins')
    //     .then((data)=>{
    //         setAdminArray(data.data.data)
    //         console.log(data.data.data)
    //     })
    //     .catch(err=>console.error(err))
    // },[])
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
    
    return (
        <div className="rapper">
            <h1>All Products</h1>
            <div>
            <Link to="/" className="linkBack">Back</Link>
           
            {/* <form action="">
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" />
                <label htmlFor="">password</label>
                <input type="text" name="" id="" />
                <button onClick={handleLogin}>log in</button>
            </form> */}

                {productArray.map((object:InterfaceProduct) =>{
                    return (
                        <div>
                            <ProductCard product={object} key={object._id}/>
                            <DeleteButton product={object} />
                            {/* <EditButton product={object}/> */}
                        </div>
                )
                })}
            
            <h3>Add New Product</h3>
            </div>
            <SetProduct title="title" price="price" img="link to img" description="description"/>
            <UserNav/>
        </div>
    );
}