
import mongoose from "mongoose";
import { json } from "stream/consumers";
import UserModel from "../Models/UserModel";

 export async function onscondPageLoad(req, res) {
    try {
        const {userId}= req.body
       
        console.log(userId)
        const userDB = await UserModel.findOne( {_id:userId} );
        if (!userDB) throw new Error("userId does not match");
        
        res.send(userDB)

    } catch (error) {
        console.error(error)
    }
}