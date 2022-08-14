import mongoose from "mongoose"
import UserModel, {UserValidation} from '../models/UserModel';
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const {error} = UserValidation.validate({email, password});
        if(error) throw error;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const userDB = new UserModel({name, email, password: hash});
        // const userDB = new UserModel({name, email, password});
        await userDB.save();
        
        res.status(200).send({success: true, user: userDB});
        console.log('userDB is:', userDB);
        console.log('hash is:', hash);

    } catch (error) {
        console.error(error.message);
        res.send({error: error.message});
    }
}

export const login = async (req, res) => {
   try {
      const {email, password} = req.body;
      const {error} = UserValidation.validate({email, password});
      if(error) throw error;

      const userDB = await UserModel.findOne({email});

      let entrances = userDB.entrances;
      if(!entrances) entrances = 0;
      entrances++;
      console.log(entrances);
      await userDB.updateOne({entrances});

      const role = userDB.role || 'user';
      console.log(role);

      const name = userDB.name;

      const cookie = {userId: userDB._id, role, name};
      const secret = process.env.JWT_SECRET;
      const JWTCookie = jwt.encode(cookie, secret);


      if(!userDB) {
        res.send({login: false});
      } else {
        const isMatchPassword = bcrypt.compare(password, userDB.password);
        if(!isMatchPassword) throw new Error ('Username or password is not matched');
        res.cookie('user', JWTCookie, {maxAge: 1000*60*60*24});
        res.send({success: true, user: userDB, entrances});
      }

    } catch (error) {
      console.error(error.message);
      res.send({error: error.message});
    }
}


export const getUserByCookie = async (req, res) => {
    try {
        const {user} = req.cookies;
        console.log("user is:", user);
        if(!user) throw new Error('Cookie user not found');

        const secret = process.env.JWT_SECRET;
        let decodedCookie = jwt.decode(user, secret);
        console.log(decodedCookie);

        res.send({ success: true, user, decodedCookie });
        console.log("user is:", user);
    } catch (error) {
        console.error(error.message);
        res.send({error: error.message});
    }
}