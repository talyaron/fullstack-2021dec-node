import jwt from "jwt-simple";

export function getUserData(req, res, next) {
  try {
    const { player1, player2 } = req.cookies;
    if (!player1) throw new Error("user cookie not found");
    if (!player2) throw new Error("user cookie not found");

    const secret1 = process.env.JWT_SECRET;
    let decodedCookie1 = jwt.decode(player1, secret1);

    const secret2 = process.env.JWT_SECRET;
    let decodedCookie2 = jwt.decode(player2, secret2);

    console.log("decodedCookie1 is:", decodedCookie1);
    console.log("decodedCookie2 is:", decodedCookie2);
    req.player1 = decodedCookie1;
    req.player2 = decodedCookie2;
    console.log("req.player1 is:", req.player1);
    console.log("req.player2 is:", req.player2);
    next();
  } catch (error) {
    res.send({ error: error });
  }
}
