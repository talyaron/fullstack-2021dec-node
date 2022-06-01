import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 5689;

app.use(express.static('public'));
app.use(express.json());

try {
    mongoose.connect("mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/test", () => {
        console.log(`DB connected`)
    })
} catch (error) {
    console.log(error)
}

import routers from './routers/routers'
app.use('/', routers)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})