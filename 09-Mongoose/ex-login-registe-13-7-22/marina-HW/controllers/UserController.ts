
import mongoose from "mongoose";
import  UserModel, {UserValidation } from "../models/UserModel";

export const register = async (req, res) => {
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



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const userDB = await UserModel.findOne({ email, password });

    let entrances: number | undefined = userDB.entrances;
    if (!entrances) entrances = 0;
    entrances++;
    console.log(entrances);
    await userDB.updateOne({ entrances });

    if (!userDB) {
      res.send({ login: false });
      
    } else {
      res.cookie("user", { userId: userDB._id }, { maxAge: 1000 * 60 * 4 });  // 4 min
      res.status(200).send({ login: true, user: userDB, entrances });
    }
    console.log("Just logged in userDB:", userDB);

  } catch (error) {
    console.error(error);
    res.send({ login: false, error: "Login faild" });
  }
};


