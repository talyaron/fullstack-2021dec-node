import mongoose from "mongoose";
import ProductModel from "../models/productModel";

export async function addProduct(req, res) {
    try {

        const {title, ownerId} = req.body;
        const userDB = await ProductModel.create({title, ownerId});
        res.send({ok: true, userDB});

    } catch (error) {
        console.error(error);
        res.send({error: error});
    }
};