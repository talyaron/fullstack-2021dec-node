import { connection } from "../../server";

export function search(req, res) {
    try {
      const { search } = req.body;
      console.log(search)
      const query = `SELECT movie_id, movie_name FROM movies.movies WHERE movie_name= '${search}'`;
      
      connection.query(query, (err, result) => {
        try {
          if (err) throw err;
          console.log(result)
          res.send({result} );
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

  export function getAll(req, res) {
    try {
      const query = `SELECT * FROM movies.movies`;
      connection.query(query, (err, result) => {
        try {
          if (err) throw err;
          console.log(result)
          res.send({ result });
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