import mongoose from "mongoose";
import DoctorModel from "../Models/DoctorModel";

export async function getAllDoctors(req,res){

const allDoctors =await DoctorModel.find()

console.log(allDoctors);

}
