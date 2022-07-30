import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";

export async function getAppo(req, res) {

    try {
       
        const {date, type} = req.body;

        console.log(date)
    
        console.log(type)
    
        const apposResult = await AppoModel.find({ date: date, type: type }).exec();
    
       res.send(apposResult)


    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }


}