
import mongoose from "mongoose";
import PlayerModel, { UserValidation } from "../models/PlayerModel";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const playerDB = new PlayerModel({ name, email, password: hash });
   
    await playerDB.save();

    res.status(200).send({ success: true, player: playerDB });
    console.log("playerDB is:", playerDB);
    console.log("hash is:", hash);
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const playerDB = await PlayerModel.findOne({ email });

    let entrances = playerDB.entrances;
    if (!entrances) entrances = 0;
    entrances++;
    console.log(entrances);
    await playerDB.updateOne({ entrances });

    const name = playerDB.name;
    const score = playerDB.score;

    const cookie = { playerId: playerDB._id, name, score };
    const secret = process.env.JWT_SECRET;
    const JWTCookie = jwt.encode(cookie, secret);

    if (!playerDB) {
      res.send({ login: false });
    } else {
      const isMatchPassword = bcrypt.compare(password, playerDB.password);
      if (!isMatchPassword)
        throw new Error("username or password is not matched");
      res.cookie("player", JWTCookie, { maxAge: 1000 * 60 * 60 * 24});
      res.send({ success: true, player: playerDB, entrances });
    }
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const getPlayerByCookie = async (req, res) => {
  try {
    const { player } = req.cookies;
    console.log("player is:", player);
    if (!player) throw new Error("Cookie player not found");

    // const secret = process.env.JWT_SECRET;
    // let decodedCookie = jwt.decode(player, secret);
    // console.log(decodedCookie);
   

    // res.send({ success: true, player, decodedCookie });
    res.send({ success: true, player});
    // res.send({ success: true, player });
    console.log("player is:", player);
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};