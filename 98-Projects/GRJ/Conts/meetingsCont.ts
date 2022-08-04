import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";

export async function getUserMeeting(req, res) {
    try {
        const {userId}= req.body
       
        console.log(userId)
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
        console.log(userDB)
        if (!userDB) throw new Error("userId does not match");
        let newUserDB = userDB.filter((userDB) => userDB.userId != "empty");
        console.log(newUserDB)
        res.send(newUserDB)

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