import mongoose from "mongoose";

export const AdminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const AdminModel = mongoose.model("admins", AdminSchema)