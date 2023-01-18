import { connection } from "../../server";

export function search(req, res) {
  try {
    const { search } = req.body;
    console.log(search)
    const query = `SELECT * FROM movies.movies WHERE movie_name= '${search}'`;
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

export function getSearchResult(req, res) {
  try {
    const { search } = req.query;
    console.log(search)
    const query = `SELECT * FROM movies.movies WHERE movie_id= '${search}'`;
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

export function getMyFav(req, res) {
  try {
    const  { user_id } = req.body;
    console.log(user_id);
    const query = `SELECT * FROM movies.users_new WHERE user_id='${user_id}';`;
    connection.query(query, (err, result) => {
      try {
        if (err) throw err;
        console.log(result)
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}3

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
    const { movie_id, user_id } = req.body;
    console.log(movie_id, user_id);
    const query =  `UPDATE movies.users_new SET  movies_name='${movie_id}' WHERE user_id='${user_id}';`;
    connection.query(query, (err, user_id, movies_name) => {
      try {
        if (err) throw err;
        console.log(user_id, movies_name)
        res.send({ user_id, movies_name });
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


export function getMovies(req, res) {
  try {
    const { movie } = req.body;
    console.log(movie)
    const query = `SELECT * FROM movies.movies WHERE movie_id= '${movie}'`;
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
