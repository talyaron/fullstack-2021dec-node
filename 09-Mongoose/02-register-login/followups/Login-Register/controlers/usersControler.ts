
import uid from "../helpers";
import mongoose from "mongoose";
import UserModel, {UserValidation} from "../models/UserModel";

export const handleRegister = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const { error } = UserValidation.validate({ email, name, password });
        if (error) throw error;

        const user = new UserModel({email, name, password});
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

        const {email, name, password} = req.body;
        const {error} = UserValidation.validate({email, password});

        const user = await UserModel.findOne({email, name, password});

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




