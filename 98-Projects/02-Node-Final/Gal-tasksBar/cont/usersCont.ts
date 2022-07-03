import UserModel from "../models/models";
import mongoose from "mongoose";
export interface User{
    username: string,
    email: string,
    password: string
};

export let users: Array<User> = [];

export async function getUsers(req, res) {
    try {
        const { email, password } = req.body;
        const user= await UserModel.find({email,password})
		if (!user) throw new Error('couldnt find user');
		res.send({ user });
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
}

export const getUserByCookie = (req,res)=>{
    try {
        const {user} = req.cookies;
        console.log(user);
        res.send({ok:true,user})
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}


export const handleUpdateUser = async (req, res) => {
    try {
      const { email, newName } = req.body;
      const index = users.findIndex(object => {return object.email === String(email)})
      users[index].email = newName
      
      res.send({ users });
  
    } catch (error) {
      res.send({ error: error.message });
    }
  };


export const handleDelete = async (req, res) => {
	try {
        const {id}= req.body;
        if(id){
            await UserModel.findByIdAndDelete(id) 
            res.send({ok:true});
        }
		// res.send({ users });
	} catch (error) {
		res.send({ error: error.message });
	}
};


export const handleAddUser = (req, res) => {
    const { email,password } = req.body;
    if (!email || !password) throw new Error("email is required");
  
    const user: User = {
        email, password,
        username: ""
    };
    users.push(user);
    res.send(users);
  };


