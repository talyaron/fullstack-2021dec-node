
import uid from "../helpers";
import mongoose from "mongoose";
import UserModel, {UserValidation} from "../models/UserModel";

export const handleRegister = async (req, res) => {
    try {
        const { email, name, password,img } = req.body;
        const { error } = UserValidation.validate({ email, name, password, img });
        if (error) throw error;

        const user = new UserModel({email, name, password,img});
        const result = await user.save();

        res.send({ok: true, result})
        console.log(result);

    } catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export const handleLogin = async (req, res) => {
    try {

        const {email, password} = req.body;
        const {error} = UserValidation.validate({email, password});

        const user = await UserModel.findOne({email, password});

        if(!user) {
            res.send({login: false});

        } else {
            res.send({login: true, user});
        }

        console.log('Just logged in', user);

    } catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export async function getUser(req, res){
    try {
        const {userId,age} = req.query;
        console.log(age)
        if(!userId) throw new Error("missing userId in query");

        const userDB = await UserModel.findById(userId);

        if(!userDB) throw new Error(`coundt find use with this id: ${userId}` );

        res.send({user:userDB, success:true});

    } catch (error) {
        console.error(error);
        res.send({eror: error.message});
    }
} 




