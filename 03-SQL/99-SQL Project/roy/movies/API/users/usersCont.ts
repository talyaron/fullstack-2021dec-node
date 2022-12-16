import { connection } from "../../server";
import { UserJoi } from "./usersModel";

export function register(req, res) {
  try {
    const { email, password, name } = req.body;

    const { error } = UserJoi.validate({ email, password, name });
    if (error) throw error;

    const query = `INSERT INTO movies.users (email, name, password) VALUES ('${email}','${name}', '${password}');`; `SELECT user_id FROM movies.users WHERE email='${email}'`;
    connection.query(query, (err, user_id) => {
      try {
        if (err) throw err;
        console.log(user_id)
        res.send({ ok: true, email, user_id });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}


export function login(req, res) {
  try {
   const { email, password } = req.query;
    const query = `SELECT * FROM movies.users WHERE email='${email}' AND password='${password}' `; `SELECT user_id FROM movies.users WHERE email='${email}'`;
    connection.query(query, (err,user_id) => {
      try {
        if (err) throw err;
        console.log(user_id)
        res.send({ ok: true, user: user_id});
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
} catch (error) {
  console.error(error);
  res.status(500).send({ error: error.message });
}};