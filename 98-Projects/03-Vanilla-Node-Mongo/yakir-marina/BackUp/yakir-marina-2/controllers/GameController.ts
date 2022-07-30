import GameModel from "../models/GameModel";
import jwt from "jwt-simple";


export const getGames = async (req, res) => {
  try {
    const { player } = req.cookies;
    if (!player) throw new Error("The player not found");
    console.log(player);
    const { playerId } = player;

    const gameDB = await GameModel.find({ gameId: playerId });

    res.send({ success: true, player, game: gameDB });
    console.log(gameDB);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const addGame = async (req, res) => {
  try {
    const {} = req.body; // !!!!!!!!!!!!!!!!
    const { player } = req.cookies;

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(player, secret);
    console.log(decodedCookie);
    //  const { playerId } = player;
    const { playerId } = decodedCookie;

    const gameDB = new GameModel({ gameId: playerId });
    await gameDB.save();

    if (!player) throw new Error("The player not found");
    console.log(player);

    res.send({ success: true, game: gameDB });
    console.log("from addGame:", gameDB);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
