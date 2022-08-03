
import express from "express";
import mongoose from "mongoose";
import  UserModel, {UserValidation } from "../models/UserModel";

export const handleRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const userDB = new UserModel({ email, password });
    await userDB.save();

    res.status(200).send({ success: true, user: userDB });
    console.log(userDB);

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};


export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const userDB = await UserModel.findOne({ email, password });

    if (!userDB) {
      res.send({ login: false });
    } else {
      res.cookie('user', userDB._id);
      res.status(200).send({ login: true, user: userDB });
    }
    console.log("Just logged in", userDB);

  } catch (error) {
    console.error(error);
    res.send({ login: false, error: "Login faild" });
  }
};


export const getUserByCookie = async (req, res) => {
  try {
    const {user} = req.cookies;
    console.log('user is:', user);
    if(!user) throw new Error('User not found');
   
    const userDB = await UserModel.findByIdAndUpdate(
      user,
      {
        $inc: { entrances: 1 },
      },
      {
        returnUser: "after",
      },
    );
   
  
    if (!userDB) throw new Error("User not found in DB");
    console.log("userDB is:", userDB);

    res.send({ success: true, user: userDB });
    
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}






