import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";

export async function getUserMeting(req, res) {
    try {
        const {userId}= req.body
       
        console.log(userId)
        const userDB = await AppoModel.find( {_id:userId} ).exec();
        console.log(userDB)
        if (!userDB) throw new Error("userId does not match");
        
        res.send(userDB)

    } catch (error) {
        console.error(error)
    }
}

export async function handleDelete(req, res){
    const {date, time, doctor}= req.body;
    console.log(date, time, doctor)

    const AppoDB= await AppoModel.find({date:date, time:time, doctorId:doctor})
    console.log(AppoDB)
    if(!AppoDB)throw new Error("couldn't be found");

    res.send(AppoDB)
}