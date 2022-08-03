import mongoose from "mongoose";
import UserModel from "../models/userModel";

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
        
        // respond with cookie
        res.cookie("user", {userId: userDB._id});
        res.send({ok: true, userDB});

    } catch (error) {
        console.error(error);
        res.send({error: error});
    }
};
