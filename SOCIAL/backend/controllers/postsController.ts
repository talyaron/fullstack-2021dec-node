import { db } from "../db";
import jwt from "jsonwebtoken";
import moment from "moment";

// GETING POSTS OF THE SPICIFIC FOLLOWED USER & LOGGED IN USER by DESC ORDER:
export const getPosts = (req, res) => {
  // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
  const userCookie = req.cookies.userCookie;
  const secret = process.env.JWT_SECRET;

  if (!userCookie)
    return res.status(401).send({ message: "User not logged in" });
  jwt.verify(userCookie, secret, (err, cookieId) => {
    if (err)
      return res.status(401).send({ message: "userCookie is not valid!" });

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u 
    ON (u.id = p.userId) LEFT JOIN relationships AS r ON 
    (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
    ORDER BY p.createdAt DESC
    `;
    // cookieId.id = JWTCookie.id
    // in the case of relationships, we have to add two user IDs:
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


// SQL EXPLANATION WITH FUNCTIONS:
// -----------------------------------------------------------------------------------------------------
// SELECT * FROM posts AS p      <-- select from all posts (p - shortcut of this posts)
// SELECT * FROM posts AS p JOIN users AS u     <-- joining posts & users tables
// SELECT * FROM posts AS p JOIN users AS u ON (u.id = p.userId)    <-- selecting only the owner of this post
// SELECT p.*   <-- selecting everything from the posts only
// SELECT p.*, u.id AS userId, name, profilePic    <-- selecting everything all from the posts and retrieving userId, name, profilePic only

// 1. GETING POSTS OF ALL USERS:
// export const getPosts = (req, res) => {
//   const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u
//   ON (u.id = p.userId) `;
//   db.query(q, (err, data) => {
//     try {
//       if (err) throw err;
//       console.log(data);
//       res.status(200).send({ success: true, data});

//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   });
// };

// -----------------------------------------------------------------------------------------------------
// JOIN relationships AS r ON (p.userId = r.followedUserId AND r.followerUserId = ?)   <-- ID of the post user => followed user & ID of the follower => ID of logged in user
// r.followerUserId = ?  <-- ID of the logged in user

// 2. GETING POSTS OF THE SPICIFIC FOLLOWED USER ONLY (WITHOUT LOGGED IN USER`S POSTS):
// export const getPosts = (req, res) => {
//   // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
//   const userCookie = req.cookies.userCookie;
//   const secret = process.env.JWT_SECRET;
//   if (!userCookie) return res.status(401).send({ message: "User not logged in" });
//   jwt.verify(userCookie, secret, (err, cookieId) => {
//     if (err) return res.status(401).send({ message: "userCookie is not valid!" });

//     const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u
//     ON (u.id = p.userId) JOIN relationships AS r ON (p.userId = r.followedUserId AND r.followerUserId = ?)`;
//     // cookieId.id = JWTCookie.id
//     db.query(q, [cookieId.id], (err, data) => {
//       try {
//         if (err) throw err;
//         console.log(data);
//         res.status(200).send({ success: true, data });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//       }
//     });
//   });
// };

// --------------------------------------------------------------------------------------------
// WHERE r.followerUserId = ?  <--  ( id of logged in user )   OR p.userId = ?   <-- ( id of logged in user )
// ORDER BY p.createdAt DESC   <-- ordering posts on Descending order

// 3. GETING POSTS OF THE SPICIFIC FOLLOWED USER & LOGGED IN USER by DESC ORDER:
// export const getPosts = (req, res) => {
//   // RETRIEVING & VERIFYING USER id FROM THE COOKIES:
//   const userCookie = req.cookies.userCookie;
//   const secret = process.env.JWT_SECRET;
//   if (!userCookie)
//     return res.status(401).send({ message: "User not logged in" });
//   jwt.verify(userCookie, secret, (err, cookieId) => {
//     if (err)
//       return res.status(401).send({ message: "userCookie is not valid!" });

//     const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u
//     ON (u.id = p.userId) LEFT JOIN relationships AS r ON
//     (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
//     ORDER BY p.createdAt DESC
//      `;
//     // cookieId.id = JWTCookie.id
//     // in the case of relationships, we have to add two user IDs:
//     db.query(q, [cookieId.id, cookieId.id], (err, data) => {
//       try {
//         if (err) throw err;
//         console.log(data);
//         res.status(200).send({ success: true, data });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//       }
//     });
//   });
// };
