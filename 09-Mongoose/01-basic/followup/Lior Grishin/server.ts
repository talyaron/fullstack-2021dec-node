import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
const port = process.env.port || 3000;



app.get('/', (req: express.Request, res: express.Response) => {
    try {
        res.send('Hello World');
    } catch (error) {
        res.send({ error: error.message })
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});