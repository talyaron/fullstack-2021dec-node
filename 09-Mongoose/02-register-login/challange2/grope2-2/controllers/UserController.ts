
import mongoose from "mongoose";
// import {UserModel} from "../models/UserModel";
// import { ProfileModel } from "../models/UserModel";
// import { UserValidation } from "../models/UserModel";
import { UserModel, ProfileModel, UserValidation } from "../models/UserModel";

export const handleRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = new UserModel({ email, password });
    const result = await user.save();

    res.status(200).send({ success: true, result });
    console.log(result);

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Register faild" });
  }
};


export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;
    const user = await UserModel.findOne({ email, password });

    if (!user) {
      res.send({ login: false });
    } else {
      res.status(200).send({ login: true, user });
    }
    console.log("Just logged in", user);

  } catch (error) {
    console.error(error);
    res.status(500).send({ login: false, error: "Login faild" });
  }
};

export const handleSubmit = async (req, res) => {
  try {
    const { name, age, url } = req.body;
    const userProfile = new ProfileModel({ name, age, url });
    const profile = await userProfile.save();

    res.status(200).send({ succes: true, profile });
    console.log(profile);
    
  } catch (error) {
    console.error(error);
    res.status(500).send({ login: false, error: "Coud`nt submit user profile" });
  }
}

export const handleUpdate = async (req, res) => {
  try {
   const { userId } = req.query;
    
    const profile = await ProfileModel.findByIdAndUpdate(
      { _id: userId },
      { returnDocument: "after" }
    );
    res.status(200).send({ success: true, profile });
    
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Coud`nt update user profile'});
  }
}

export const toNextPage = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) throw new Error("didnt find userId");

    const userDB = await ProfileModel.findById(userId);
   
    if (!userDB) throw new Error(`didn't find userDB: ${userId}`);

    res.status(200).send({ user: userDB, success: true });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


