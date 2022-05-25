const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static('public'))

//all users array
let users: Array < user > = [];

//interface for user
interface user {
    userName: string,
        email: string,
        uniqID: string,
        permissions: any
}

app.get('/api/users', (req, res) => {

    const {
        userName,
        email,
        uniqID,
        permissions
    } = req.body;
    if (!userName)
        throw new Error("User name is required");
    if (!email)
        throw new Error("Email is required");
    if (!uniqID)
        throw new Error("uniqID is required");
    if (!permissions)
        throw new Error("Permissions are required");

    res.send(users)
})


app.post('/api/add-user', (req, res) => {
    try {
        const {
            userName,
            email,
            permissions
        } = req.body;
        if (!userName)
            throw new Error("User name is required");
        if (!email)
            throw new Error("Email is required");
        if (!permissions)
            throw new Error("Permissions are required");

        const user: user = {
            userName,
            email,
            uniqID: uid(),
            permissions
        };

        users.push(user);
        // console.log(users);

        res.send({
            users
        });

    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

app.put('/api/update-user', (req, res) => {
    try {
        const {
            userName,
            email,
            uniqID,
            permissions
        } = req.body;
        if (!userName)
            throw new Error("User name is required");
        if (!email)
            throw new Error("Email is required");
        if (!permissions)
            throw new Error("Permissions are required");

        const userIndex = users.findIndex(user => user.uniqID === uniqID);
        if (userIndex === -1)
            throw new Error("user not found");

        users[userIndex].userName = userName;
        users[userIndex].email = email;
        users[userIndex].permissions = permissions;

        res.send({
            users
        });

    } catch (error) {
        res.send({
            error: error.message
        });
    }
});

// UUid function
const uid = function () {
    return Date
        .now()
        .toString(36) + Math
        .random()
        .toString(36)
        .substr(2);
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});