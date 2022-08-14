import mongoose from "mongoose";
import UserModel from "../models/userModel";
import jwt from 'jwt-simple';

export async function register(req, res) {
    try {

        const {email, password} = req.body;
        const userDB = await UserModel.create({email, password});
        res.send({ok: true, userDB});

    } catch (error) {
        console.error(error);
        res.send({error: error});
    }
};

export async function login(req, res) {
    try {

        const {email, password} = req.body;
        const userDB = await UserModel.findOne({email, password});
        if (!userDB) 
            throw new Error("User not found");
        
        const role = userDB.role || "user";
        console.log(role);
        
        // respond with cookie
        const cookie = { userId: userDB._id, role }
        const secret = process.env.JWT_SECRET;
        const JWTcookie = jwt.encode(cookie, secret);
        
        res.cookie("user", JWTcookie, {maxAge:1000*60*10});
        res.send({ok: true});

    } catch (error) {
        console.error(error);
        res.send({error: error});
    }
};
