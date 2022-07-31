import mongoose from "mongoose";
import { regModel, coachModel } from "../model/model";
import jwt from 'jwt-simple';
import bcrypt from "bcrypt";
const saltRounds = 10;

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
        
        const userDB = await regModel.findOne({ email });
        if (!userDB) throw new Error("User name or password do not match");
        if(!userDB.password) throw new Error('No password in DB')
    
        const isMatch = await bcrypt.compare(password, userDB.password)
    
        if(!isMatch) throw new Error ('Username or password do not match')
    
        const role = userDB.role
        const cookie = (userDB._id, role);
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


//Backup login function before add becrypt:

//export async function login(req:any, res:any){
//     try {
//         const {email, password} = req.body;
        
//         const findUser:any = await regModel.findOne({email, password});
//         if (!findUser) throw new Error("User name or password do not match");
//         const role = findUser.role
//         const cookie = (findUser._id, role);
//         const secret = process.env.JWT_SECRET;
//         const JWTCookie = jwt.encode(cookie, secret);
//         res.cookie('user', JWTCookie)
//         res.send({ok:true})
//     } catch (error:any) {
//         res.send({error: error.message})
//     }
// }



