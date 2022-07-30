import jwt from "jwt-simple";
// import bcrypt from "bcrypt";

export function isUser (req, res, next) {
  try {
    const { user } = req.cookies;
    if (!user) throw new Error("user cookie not found");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(user, secret);

    console.log("decodedCookie is:", decodedCookie);
    req.user = decodedCookie;
    console.log("req.user is:", req.user);

    next();
  } catch (error) {
    res.send({ error: error });
  }
}


