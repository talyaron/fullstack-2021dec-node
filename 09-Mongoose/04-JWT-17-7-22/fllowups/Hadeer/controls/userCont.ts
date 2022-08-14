import mongoose from "mongoose";
// import UserModel from "../../models/userModel";
import jwt from 'jwt-simple';

export async function register(req, res) {
    try {
        const {email, password} = req.body;
        // const userDB = await UserModel.create({ email, password });
        res.send({ ok: true });
        
    } catch (error: any) {
        console.error(error);
        res.send({ error: error.message });
        
    }
}

export async function login(req, res) {
    try {
        const {email, password} = req.body;
        
        
    }  catch (error: any) {
        console.error(error);
        res.send({ error: error.message });
        
    }
}