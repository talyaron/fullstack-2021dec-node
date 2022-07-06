import { ok } from "assert";
import UserModel, { UserValidation } from "../models/models";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = await UserModel.findOne({ email, password });
    if (!user) {
      res.send({ login: false });
    } else {
      res.send({ login: true });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = new UserModel({ email, password });
    await user.save();

    res.send({ register: true });
  } catch (error) {
    res.send({ error: error.message });
  }
}


export async function saveInfo(req, res) {
  try {
    const { name, age, image } = req.body;
    
    if (!name || !age || !image ) throw Error;

    const user = new UserModel({ name, age, image });
    await user.save();

    res.send({ user });
  } catch (error) {
    res.send({ error: error.message });
  }
};


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