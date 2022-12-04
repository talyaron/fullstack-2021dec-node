import { db } from "../db";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {

    const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;

  db.query(q, [req.query.postId], (err, data) => {
    try {
      if (err) throw err;
      console.log(data);
      res.status(200).send({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
};



export const addComments = (req, res) => {
  const { description, postId } = req.body;
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });
    // const q = `INSERT INTO comments (description, createdAt, userId, postId) VALUES ("${description}", "${moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")}", ${cookieId.id}, "${postId}");`;
    const q =
      "INSERT INTO comments(`description`, `createdAt`, `userId`, `postId`) VALUES (?)";
    
    const values = [
      description,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      cookieId.id,
      postId,
    ];
    db.query(q, [values], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Comments has been created successfully!",
          data,
        });

        console.log(data)

      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
  
};

// GET COMMENT AMOUNT
export const getCommentsAmount = (req, res) => {
  const q = "SELECT * from comments WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    try {
      if (err) throw err;
      res.status(200).send({ success: true, data });
      console.log(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
};