import express from 'express';
const app = express();
const port = process.env.PORT || 5687;

app.use(express.static("public"));
app.use(express.json());




app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
