import UserModel, { UserValidation } from "../Models/UserModel";
import mongoose from "mongoose";
import jwt from 'jwt-simple';
import bcrypt from "bcrypt";
const saltRounds = 10;

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;
    console.log(email)

    const userDB = await UserModel.findOne({ email });
    console.log(userDB)
    if (!userDB) throw new Error("User name or password do not match");
    if (!userDB.password) throw new Error('No password in DB')
    const isMatch = await bcrypt.compare(password, userDB.password)
    console.log(password, userDB.password)
    if (!isMatch) throw new Error('Username or password do not match')

    const role = userDB.role || "user";
    console.log(role);

    const cookie = { user: userDB._id };
    const secret = process.env.JWT_SECRET;
    const JWTCookie = jwt.encode(cookie, secret);

    res.cookie('user', JWTCookie);
    res.send({ login: true, userDB});


  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { email, password, name } = req.body;
    const { error } = UserValidation.validate({ email, password });

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    // if (error) throw error;

    const userDB = await UserModel.create({ email, name, password: hash });
    // await user.save();

    res.send({ register: true, userId: userDB.id });
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


export const getUserByCookie = async (req, res) => {
  try {
    const { user } = req.cookies;
    console.log('user', user)

    if (!user) {
      throw new Error("user not found");
    }

    const userDB = await user.findById(user);
    console.log('userDB', userDB)

    if (!userDB) throw new Error("user not found in DB")

    res.send({ ok: true, user: userDB })
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}
