import UserModel from "../models/usermModel";

export async function login(req,res){
try {

} catch (error) {

}
}

export async function register(req,res){
try {
    const {email,password}  = req.body
} catch (error) {
    res.send({error:error.message}) 
}

}