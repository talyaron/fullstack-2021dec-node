import mongoose from "mongoose";
import { regModel, coachModel } from "../model/model";
import jwt from 'jwt-simple';

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
        const role = findUser.role
        const cookie = (findUser._id, role);
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret);
        res.cookie('user', JWTCookie)
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
        const role = findCoach.role;
        const cookie = (findCoach._id, role);
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret);
        res.cookie('coach', JWTCookie);
        res.send({ok:true})
    } catch (error:any) {
        res.send({error: error.message})
    }
}




