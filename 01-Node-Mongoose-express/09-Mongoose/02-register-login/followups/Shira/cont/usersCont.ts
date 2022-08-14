import userModel, { UserValidation } from "../models/usersModel";


export async function login(req,res) {
    try {
        const {email,password} = req.body;
        const {error} = UserValidation.validate({email,password})
        if(error) throw error;

        const newUser = await userModel.findOne({email,password})
        if(!newUser){
            res.send({login:false})
        }
        else
        res.send({login:true})


    } catch (error) {
    res.send({ error: error.message });   
    }
}

export async function register(req,res) {
    try {

        const {email,password} = req.body;
        const {error} = UserValidation.validate({email,password})
        if(error) throw error;


        const newUser  = new userModel({email,password})
        await newUser.save();
        
        res.send({register:true})


    } catch (error) {
    res.send({ error: error.message });
    }
}