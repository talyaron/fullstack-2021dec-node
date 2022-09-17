import { number } from "joi";
import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";
import DoctorModel from "../Models/DoctorModel";

export async function getUserMeeting(req, res) {
    try {
        const {userId}= req.body
       
        
        const userDB = await AppoModel.find( {userId:userId} );
        console.log(userDB)
      
        
        if (!userDB) throw new Error("userId does not match");
        
        res.send(userDB)

    } catch (error) {
        console.error(error)
    }
}

export async function getDoctorMeeting(req, res) {
    try {
        const {DoctorName}= req.body
        console.log(DoctorName)
        const userDB = await AppoModel.find( {doctorId:DoctorName} );
        const doctorFirstName= await DoctorModel.findById(DoctorName)
        console.log(doctorFirstName)
        let doctorName= doctorFirstName.firstName
        if (!userDB) throw new Error("userId does not match");
        let newUserDB = userDB.filter((userDB) => userDB.userId != "empty");
        
        res.send({newUserDB, doctorName})
        

    } catch (error) {
        console.error(error)
    }
}

export async function handleDelete(req, res){
    const {appoId}= req.body;
    console.log(appoId,"1")

    const AppoDB= await AppoModel.findByIdAndRemove( {_id:appoId} )
    console.log(AppoDB)
    if(!AppoDB)throw new Error("couldn't be found");

    res.send(AppoDB)
}