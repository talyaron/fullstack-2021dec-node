import { db } from "../db";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jwt-simple";
import cookieParser from "cookie-parser";
import User from "../userInterface";

// REGISTER
export const register = (req, res) => {
  const { username, email, password } = req.body;
  // CHECKING EXISTING USER:
  // const q = "SELECT * FROM users WHERE email = ? OR username = ?"
  const q = `SELECT * FROM users WHERE email='${email}' OR username='${username}'`;
  db.query(q, (err, data) => {
    try {
      if (err) throw err;
      if (data.length) {
        return res.status(403).send({ message: "User already exists!" });
      } else {
        // HASH PASSWORD & CREATING A NEW USER:
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const q = `INSERT INTO users (username, email, password) VALUES ("${username}", "${email}", "${hash}")`;
        //  const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        //  const values = [username, email, password];
        db.query(q, (err, data) => {
          try {
            if (err) throw err;
            if (!username || !email || !hash)
              throw new Error("Data is missing");
            res
              .status(200)
              .send({ success: true, massege: "User has been created", data });
          } catch (error) {
            console.error(error);
            res.send({ error: error.message });
          }
        });
      }
    } catch (error) {
      console.error(error);
      res.send({ error: error.message });
    }
  });
};

// LOGIN
export const login = (req, res) => {
  const { username, password } = req.body;
  // CHECKING EXISTING USER:
  const q = `SELECT * FROM users WHERE username="${username}"`;
  db.query(q, (err, data) => {
    try {
      if (err) throw err;
      if (data.length === 0) throw new Error("User not found");
      const { password, ...other } = data[0];
      const cookie = data[0];
      const secret = "jwtkey";
      const JWTCookie = jwt.encode(cookie, secret);
      // CHECK PASSWORD:
      const isPasswordCorrect = bcrypt.compare(password, data[0].password);
      if (!isPasswordCorrect) throw new Error("username or password is incorrect");
      res.cookie(other, JWTCookie, {
          // EXTRA SECURITY: ANY SCRIPT ON THE BROWSER / THIS APP CANNOT
          // REACH THIS COOKIE DIRECTLY, BUT CAN USE IT ON API REQUEST ONLY!
          httpOnly: true,
        }, { maxAge: 1000 * 60 * 5 });
      res.send({ success: true, other: data[0] });
    } catch (error) {
      console.error(error);
      res.send({ error: error.message });
    }
  });
};

// LOGIN
// export const login = (req, res) => {
//   const { username, password } = req.body;
//   // CHECKING EXISTING USER:
//   const q = `SELECT * FROM users WHERE username="${username}"`;
//   db.query(q, (err, data) => {
//     try {
//       const { password, ...other } = data[0];
//       if (err) throw err;
//       if (data.length === 0) throw new Error("User not found");
//       // CHECK PASSWORD:
//       // const hash = bcrypt.hashSync(password, saltRounds);
//       // const isPasswordCorrect = bcrypt.compareSync(password, hash);

//       const secret = "jwtkey";
//       const JWTCookie = jwt.encode(cookie, secret);

//       const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
//       if (!isPasswordCorrect)
//         throw new Error("username or password is incorrect");

//       // TOCKEN WITH THE USER INFO + 'jwtkey' is a secret here...
//      //   const tocken = jwt.sign({ id: data[0].id }, "jwtkey");

//       // SENDING TOCKEN AS A COOKIE:
    //   res.cookie("access_tocken", cookie, {
    //       // EXTRA SECURITY: ANY SCRIPT ON THE BROWSER / THIS APP CANNOT
    //       // REACH THIS COOKIE DIRECTLY, BUT CAN USE IT WHEN MAKE API ONLY!
    //       httpOnly: true,
    //     }).status(200).send(other);

//     } catch (error) {
//       console.error(error);
//       res.send({ error: error.message });
//     }
//   });

// };

export const logout = (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
