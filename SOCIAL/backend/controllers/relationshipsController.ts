import { db } from "../db";
import jwt from "jsonwebtoken";


// GET RELATIONSHIPS
export const getRelationships = (req, res) => {
  try {
    const { followedUserId } = req.query;
    if(!followedUserId) throw new Error('couldnt find in query followedUserId');   
    // console.log("getRelationships:", followedUserId);
    const q = `SELECT followerUserId FROM relationships WHERE followedUserId = ${followedUserId} ORDER BY followerUserId ASC`;
    console.log(q);

    db.query(q, (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({data});
        // res.json(data.map(relationship => relationship.userId));
        console.log(data);

      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};




// ADD RELATIONSHIP
export const addRelationship = (req, res) => {
  const { userId } = req.body;
  if (!userId) throw new Error("couldnt find in query userId");
  console.log("addRelationship:", userId);

  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie) return res.status(401).send({ message: "User not logged in" });
  
  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err) return res.status(401).send({ message: "userCookie is not valid!" });
   
   const q = `INSERT INTO relationships (followerUserId, followedUserId) VALUES ("${cookieId.id}", "${userId}")`;
    db.query(q,  (err, data) => {
      try {
        if (err) throw err;
        if (data.affectedRows > 0) {

          res.status(200).send({
            success: true,
            massege: "Following",
            data,
          });
        }

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

    const q =
      "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";

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
