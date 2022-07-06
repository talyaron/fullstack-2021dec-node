const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
import uid,{randomNumber, x} from './controllers/helpers'


console.log(uid(),randomNumber(200),x);


import recipesRouter from './routes/recipeRoute';
app.use('/recipes',recipesRouter)

import postsRouter from './routes/postRoute';
app.use('/posts',postsRouter)



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  