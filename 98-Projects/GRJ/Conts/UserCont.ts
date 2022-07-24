import UserModel, { UserValidation } from "../Models/UserModel";
import mongoose from "mongoose";
import jwt from 'jwt-simple';

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = await UserModel.findOne({ email, password });

    if (user) {
      res.cookie('user', user._id);
      res.send({ login: true, user });
    } else {
      throw new Error("user not found");
    }
    }catch (error) {
      console.error(error);
    res.send({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { email, password, name } = req.body;
    const { error } = UserValidation.validate({ email, password});
    if (error) throw error;

    const user = new UserModel({ email, password, name });
    await user.save();

    res.send({ register: true });
  } catch (error) {
    res.send({ error: error.message });
  }
}


export async function saveInfo(req, res) {
  try {
    const { name } = req.body;
    
    if (!name) throw Error;

    const user = new UserModel({ name });
    await user.save();

    res.send({ user });
  } catch (error) {
    res.send({ error: error.message });
  }
};


export const getUserByCookie = async (req, res)=>{
  try {
    const {user} = req.cookies;
    console.log('user', user)

    if (!user) {
      throw new Error("user not found");
    }

    const userDB = await user.findById(user);
    console.log('userDB', userDB)

    if(!userDB) throw new Error("user not found in DB")

    res.send({ok:true, user:userDB})
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}
