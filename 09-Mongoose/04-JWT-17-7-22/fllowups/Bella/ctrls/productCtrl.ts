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

export async function getProducts(req, res) {
    try {
      //get user id
      const { user } = req.cookies;
  
      if (!user) throw new Error("User is missing!!!!!");
      console.log(user);
      const { userId } = user;
      const productsDB = await ProductModel.find({ ownerId: userId });
  
      res.send({ ok: true, products: productsDB });
    } catch (error) {
      res.send({ error: error.message });
    }
  }
  