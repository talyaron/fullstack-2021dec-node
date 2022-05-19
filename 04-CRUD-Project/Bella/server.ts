const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))

interface user {
    userName: string,
        email: string,
        uniqID: string,
        permissions: string,
}

const users: Array < user > = [];


app.get("/api/AllUsers", (req, res) => {
    try {
        setTimeout(() => {
            res.send({
                user: users
            });
        }, 100)

    } catch (error) {
        res.send({
            error: error.message
        })
    }
});

app.get("/api/addUser", (req, res) => {
    try {
        setTimeout(() => {
            res.send({
                user: users
            });
        }, 100)

    } catch (error) {
        res.send({
            error: error.message
        })
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});