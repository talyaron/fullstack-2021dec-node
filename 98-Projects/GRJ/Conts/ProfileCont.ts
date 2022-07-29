import mongoose from "mongoose";
import UserModel, { UserValidation } from "../Models/UserModel";

 export async function onscondPageLoad(req, res) {
    try {
        const userId= req.body
        const userDB = await UserModel.findOne({ userId });
        if (!userDB) throw new Error("userId does not match");
        console.log(userDB)
        const name= userDB.name
        console.log(name)
        res.send(name)

    } catch (error) {
        console.error(error)
    }
}