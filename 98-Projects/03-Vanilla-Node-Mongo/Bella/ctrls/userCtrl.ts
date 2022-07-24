import mongoose from "mongoose";
import UserModel from "../models/userModel";
import jwt from "jwt-simple";
import bcrypt from "bcrypt"
const saltRounds = 10;

export async function register(req, res) {
    try {
        const {name, email, password} = req.body;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const userDB = await UserModel.create({ name, email, hash });
        res.send({ok: true})
    } catch (error) {
        console.log(error);
    }
};

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const userDB = await UserModel.findOne({ email });
        if (!userDB) 
            throw new Error("Email or password don't match");
        
        const validUser = await bcrypt.compare(userDB.password, password);
        if (!validUser) 
            throw new Error("Email or password don't match");
        
        const name = userDB.name || "user";
        console.log(name);

        //res with cookie when logged in
        const cookie = {
            userId: userDB._id,
            name
        }
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret);

        res.cookie("user", JWTCookie, {
            maxAge: 1000 * 60 * 4
        });
        res.send({ ok: true });

    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};