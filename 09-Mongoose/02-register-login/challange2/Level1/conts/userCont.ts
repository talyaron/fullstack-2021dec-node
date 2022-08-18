import uid from "../helpers";
import mongoose from "mongoose";
import UserModel, {UserValidation} from "../models/UserModel";
import userModel from "../models/UserModel";

export async function handleRegister(req,res) {
    try {
        const {email,password,name,age,img} = req.body;
        const {error} = UserValidation.validate ({email,password,name,age,img});
        if (error) throw error;

        const user = new userModel({email,password,name,age,img});
        const result = await user.save();

        res.send({ok:true, result})
        console.log(result);
        
    }
     catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export async function handleLogin(req,res) {
    try {
        const {email,password} = req.body;
        const {error} = UserValidation.validate ({email,password});
        if (error) throw error;

        const user = await userModel.findOne({email,password})

      if(!user) {
        res.send({login:false})
      }
      else{
        res.send({login:true,user})        
      }

      console.log(user);

    }
     catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export async function getUser(req,res) {
    try {
        const {userId} = req.query;
        console.log(userId)
        if(!userId) throw new Error("missing userId in query");

        const userDB = await UserModel.findById(userId);

        if(!userDB) throw new Error(`coundt find use with this id: ${userId}` );

        res.send({user:userDB, success:true});

    } catch (error) {
        console.error(error);
        res.send({eror: error.message});
    }
}


