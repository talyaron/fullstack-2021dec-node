const express = require('express')
const PORT = 5050;
const app = express();
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(express.json())

try {
    mongoose.connect('mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/IDLesson', () => {
        console.log(`db connected`)
    })
} catch (error) {
    console.log(error)
}

const indexRout = require('./routes')
app.use('/', indexRout)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})