import { connection } from "../../server";

export function search(req, res) {
    try {
      const { search } = req.body;
      console.log(search)
      const query = `SELECT movie_name FROM movies.movies WHERE movie_name= '${search}'`;
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

  export function getSearchResult(req, res) {
    try {
      const { search } = req.query;
      console.log(search)
      const query = `SELECT * FROM movies.movies WHERE movie_id= '${search}'`;
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

  export function getMyFav(req, res) {
    try {
      const { user_id } = req.query;
      console.log(user_id)
      const query = `SELECT * FROM movies.users_new WHERE movie_id= '${user_id}'`;
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

  export function addFav(req, res) {
    try {
      const {movie_id, user_id, email, password}= req.body
      const query = `SELECT movie_id FROM movies.movies WHERE movie_id= '${movie_id}';`; `SELECT * FROM movies.users_new WHERE user_id='${user_id}';`;`INSERT INTO movies.users_new(user_id, movies_id) VALUES ('${user_id}', '${movie_id}');`;`SELECT user_id FROM movies.user_new WHERE movie_id= '${movie_id}';`;
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