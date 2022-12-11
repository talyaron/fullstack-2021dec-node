import { db } from "../db";
import jwt from "jsonwebtoken";
import moment from "moment";

// GETING POSTS OF THE SPICIFIC FOLLOWED USER & LOGGED IN USER by DESC ORDER:
export const getPosts = (req, res) => {
  const userId = req.query.userId;
  console.log(userId);
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;

  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });
  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q =
      userId !== "undefined"
        ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
        : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    ORDER BY p.createdAt DESC`;

    const values = userId !== "undefined" ? [userId] : [cookieId.id, cookieId.id];
    // cookieId.id = JWTCookie.id
    // in the case of relationships, we have to add two user IDs:
    db.query(q, values, (err, data) => {
      try {
        if (err) throw err;
        // console.log(data);
        res.status(200).send({ success: true, data });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};



export const addPost = (req, res) => {
  const { description, img, createdAt, userId } = req.body;
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q =
      "INSERT INTO posts(`description`, `img`, `createdAt`, `userId`) VALUES (?)";
    const values = [
      description,
      img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      cookieId.id,
    ];
    db.query(q, [values], (err, data) => {
      try {
        if (err) throw err;
        res
          .status(200)
          .send({
            success: true,
            massege: "Post has been created successfully!",
            data,
          });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};



export const deletePost = (req, res) => {
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;
  if (!userCookie) return res.status(401).send({ message: "Not autorized!" });

  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });
    // USERID => IT SHOULD BE LOGGEDIN USER`S POST:
    const q = "DELETE FROM posts WHERE `id`=? AND `userId`=?";

    db.query(q, [req.params.id, cookieId.id], (err, data) => {
      try {
        if (err) throw err;
        res.status(200).send({
          success: true,
          massege: "Post has been deleted successfully!",
        });
        console.log(data);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};



export const getStories = (req, res) => {
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;

  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });
  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = `SELECT s.*, u.id AS userId, img, FROM stories AS s LEFT JOIN users AS u ON (p.id = s.userId)
    WHERE c.postId = ?`;

    db.query(q, [cookieId.id, cookieId.id], (err, data) => {
      try {
        if (err) throw err;
        console.log(data);
        res.status(200).send({ success: true, data });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  });
};

