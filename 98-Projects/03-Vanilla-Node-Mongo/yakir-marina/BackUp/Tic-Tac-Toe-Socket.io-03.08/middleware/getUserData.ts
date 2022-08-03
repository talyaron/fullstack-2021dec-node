import jwt from "jwt-simple";

export function getUserData(req, res, next) {
  try {
    const { player} = req.cookies;
    if (!player) throw new Error("user cookie not found");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(player, secret);

    console.log("decodedCookie is:", decodedCookie);

    req.player = decodedCookie;

    console.log("req.player is:", req.player);

    next();
  } catch (error) {
    res.send({ error: error });
  }
}
