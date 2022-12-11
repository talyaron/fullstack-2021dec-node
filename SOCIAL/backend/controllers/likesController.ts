import { db } from "../db";
import jwt from "jsonwebtoken";


// GET LIKES
export const getLikes = (req, res) => {
  const q = "SELECT userId from likes WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    try {
      if (err) throw err;
      // RETRIEVING FROM LIKES DB THE USERID INFO ONLY
      // res.status(200).send({ success: true }, data.map(like => like.userId));
      res.status(200).send({ success: true, data });
      console.log(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
};


// ADD LIKE
export const addLike = (req, res) => {
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err) return res.status(401).send({ message: "userCookie is not valid!" });
    
    const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
    const values = [cookieId.id, req.body.postId];

    db.query(q, [values], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Post has been liked!",
          data,
        });

        console.log(data);

      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};



// DELETE LIKE
export const deleteLike = (req, res) => {
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [cookieId.id, req.query.postId], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Post`s like has been deleted!",
          data,
        });

        console.log(data);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};
