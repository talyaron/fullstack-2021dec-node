import mongoose from "mongoose";
import { regModel, coachModel } from "../model/model";

export async function register(req:any, res:any){
    try {
        const {email, password} = req.body;
        const userDB = await regModel.create({email, password});
        res.send({ok:true})
    } catch (error:any) {
        res.send({error: error.message})
    }
}

export async function login(req:any, res:any){
    try {
        const {email, password} = req.body;
        const findUser:any = await regModel.findOne({email, password});
        if (!findUser) throw new Error("User name or password do not match");
        const cookie = (findUser._id)
        res.cookie('user', findUser._id)
        res.send({ok:true})
    } catch (error:any) {
        res.send({error: error.message})
    }
}

export async function coachLogin(req:any, res:any){
    try {
        const {email, password} = req.body;
        const findCoach:any = await coachModel.findOne({email, password});
        if (!findCoach) throw new Error("User name or password do not match");
        const cookie = (findCoach._id)
        res.cookie('coach', findCoach._id)
        res.send({ok:true})
    } catch (error:any) {
        res.send({error: error.message})
    }
}




