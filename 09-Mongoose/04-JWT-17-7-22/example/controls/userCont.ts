import mongoose from "mongoose";
import UserModel from "../models/userModel";
import jwt from 'jwt-simple';


export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const userDB = await UserModel.create({ email, password });
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userDB = await UserModel.findOne({ email, password });
    if (!userDB) throw new Error("User name or password do not match");

    const role = userDB.role || 'user';
    console.log(role)

    //send cookie
    const cookie = {userId: userDB._id, role};
    const secret = process.env.JWT_SECRET
    const JWTCookie = jwt.encode(cookie, secret);

    res.cookie('user', JWTCookie,{maxAge:1000*60*4})
    
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
}
