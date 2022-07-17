import mongoose from "mongoose";
import UserModel from "../Models/UserModels";
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashsync(password, salt);

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

    const isMatch = await bcrypt.compare(password,userDB.password)
    if(!isMatch) throw new Error ("User name or password is not Match")

    const role = userDB.role || 'user';
    console.log(role)

    //send cookie
    const cookie= {userId: userDB._id, role};
    const secret = process.env.JWT_SECRET
    const jwtCode = jwt.encode(cookie,secret);
    
    res.cookie('user', {userId: userDB._id},{maxAge:1000*60*4})
    
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
}
