import express from 'express';
const app = express();
const port = process.env.PORT || 7894;

app.use(express.static("public"));
app.use(express.json());

import productRout from './routes/productRout';
app.use('/api', productRout)


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
