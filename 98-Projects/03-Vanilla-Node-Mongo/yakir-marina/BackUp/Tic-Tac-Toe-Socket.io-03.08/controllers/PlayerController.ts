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

    let score: 0;
    let lost: 0;
    let played: 0;

    const playerDB = new PlayerModel({
      name,
      email,
      password: hash,
      score,
      lost,
      played,
    });
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
    console.log("entrances:", entrances);

    let name = playerDB.name;
    let score = playerDB.score;
    let lost = playerDB.lost;

    await playerDB.updateOne({ entrances });

    const cookie = { playerId: playerDB._id, name };
    const secret = process.env.JWT_SECRET;
    const JWTCookie = jwt.encode(cookie, secret);

    if (!playerDB) {
      res.send({ login: false });
    } else {
      const isMatchPassword = bcrypt.compare(password, playerDB.password);
      if (!isMatchPassword)
        throw new Error("username or password is not matched");

      res.cookie("player", JWTCookie, { maxAge: 1000 * 60 * 60 * 24 });

      res.send({ success: true, player: playerDB, entrances, score, lost });
    }
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const getPlayerByCookie = async (req, res) => {
  try {
    const player = req.player;

    console.log("player is:", player);

    if (!player) throw new Error("Cookie player not found");

    res.send({ success: true, player });
    console.log("player is:", player);
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

// export const updateStatsByID = async (req, res) => {
//   try {
//     const { score, lost, playerID } = req.body;

//     const playerDB = await PlayerModel.updateOne({ score, lost, _id: playerID });

//     res.send({ success: true, score, lost, player: playerDB });

//     console.log("score is:", score);
//     console.log("lost is:", lost);
//     console.log("playerDB", playerDB);

//   } catch (error) {
//     console.error(error.message);
//     res.send({ error: error.message });
//   }
// };




export const updateLostByID = async (req, res) => {
  try {
    const { lost, playerID } = req.body;

    const playerDB = await PlayerModel.updateOne({ lost, _id: playerID });

    // lost = playerDB.lost;

    res.send({ success: true, lost, player: playerDB });

    console.log("lost is:", lost);
    console.log("playerDB", playerDB);

  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const updateScoreByID = async (req, res) => {
  try {
    const { score, playerID } = req.body;

    const playerDB = await PlayerModel.updateOne({ score, _id: playerID });

    res.send({ success: true, score, player: playerDB });

    console.log("score is:", score);
    console.log("playerDB", playerDB);

  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};
