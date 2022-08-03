import mongoose from "mongoose";
import { productModel } from "../model/model";

export async function products(req:any, res:any) {
    try {
        const {product, price} = req.body;
        const {user} = req.cookies;
        
        const productDB = await productModel.create({product, price, user });
        if(!productDB.user) throw new Error('there is no owner!!')
        res.send({ok:true})

    } catch (error:any) {
        res.send({error: error.message})
    }    
}

export async function displayProduct(req:any, res:any) {
    try {
        const {user} = req.cookies;
        const userProducts = await productModel.find({user});
        console.log(userProducts);
        
        res.send(userProducts)
    } catch (error:any) {
        res.send({error: error.message})
    }
    
}