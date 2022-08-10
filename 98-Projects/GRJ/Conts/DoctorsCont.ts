import mongoose from "mongoose";
import DoctorModel from "../Models/DoctorModel";

export async function getAllDoctors(req, res) {

    const allDoctors = await DoctorModel.find()

    res.send(allDoctors)

}

export async function createNewDoctor(req, res) {

    try {
        console.log("creating new dr");

        const { firstName, lastName, doctorId, doctorType } = req.body;
        console.log(firstName, lastName, doctorId, doctorType)

        // const checkIfExist = await DoctorModel.find({doctorId: drId})
        const newDr = new DoctorModel({ firstName, lastName, doctorId, doctorType });

        const newDrDB = await newDr.save()


        res.send({ success: true, doctor: newDrDB });


    } catch (error) {
        res.send({ error: error.message });
    }

}


export async function getDoctorsByType(req, res){
const {doctorType} = req.body;
const allDoctors = await DoctorModel.find({doctorType:doctorType});
res.send(allDoctors)

}

export async function createDoctorWorkSchedule(req,res){
    const {detailsArray, doctor_id} = req.body;
console.log(detailsArray, doctor_id);


    
}