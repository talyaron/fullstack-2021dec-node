import express from 'express';
import { dbConnection } from './DBconnnect';
const app = express();
const PORT: number | string = process.env.PORT || 9876;

app.use(express.static("public"))
app.use(express.json())

//-----DB CONNECTION ----//
dbConnection();

import tasks from './routes/tasks';
app.use('/api', tasks)

try {
    app.listen(PORT, () => {
        console.log(`listen on http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(error)
}