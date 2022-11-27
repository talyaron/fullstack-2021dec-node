import { connection } from "../../server";
import { UserJoi } from "./usersModel";

export function register(req, res) {
  try {
    const { email, password, name } = req.body;

    const { error } = UserJoi.validate({ email, password, name });
    if (error) throw error;

    const query = `INSERT INTO users (email, name, password) VALUES ('${email}','${name}', '${password}')`;
    connection.query(query, (err) => {
      try {
        if (err) throw err;
        res.send({ ok: true, user: { email, name }});
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
