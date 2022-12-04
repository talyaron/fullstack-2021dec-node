import { db } from "../db";
import jwt from "jsonwebtoken";

// GET RELATIONSHIPS
export const getRelationships = (req, res) => {
   const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    try {
      if (err) throw err;
      // RETRIEVING FROM RELATIONSHIPS DB THE USERID INFO ONLY

     res.status(200).send({ success: true, data });
      console.log(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });
};

// ADD RELATIONSHIP
export const addRelationship = (req, res) => {
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)";

    db.query(q, [cookieId.id, req.body.userId], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Following",
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

// DELETE RELATIONSHIP
export const deleteRelationship = (req, res) => {

  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";

    db.query(q, [cookieId.id, req.query.userId], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Unfollow",
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
