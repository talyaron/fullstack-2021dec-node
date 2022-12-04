import { db } from "../db";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";
  db.query(q, [userId], (err, data) => {
    try {
      if (err) throw err;
      const { password, ...postUser } = data[0];
      res.send({ success: true, postUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
};



export const updateUser = (req, res) => {
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;

  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });
  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = "UPDATE users SET `name`=?, `city`=?, `website`=?, `profilePic`=?, `coverPic`=? WHERE id=?";
    const { name, city, website, profilePic, coverPic } = req.body;
    db.query(q, [name, city, website, profilePic, coverPic, cookieId], (err, data) => {
      try {
        if (err) throw err;
       res.send({ success: true, message: "Profile Updated!", data });       
        console.log(data);
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};
