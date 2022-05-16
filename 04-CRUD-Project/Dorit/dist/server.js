var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var cakes = [
    { name: "NoneyCake",
        ingredients: ["honey 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"] },
    { name: "vanillaCake",
        ingredients: ["vanilla 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"] },
];
//route
app.get("/api/get-cake", function (req, res) {
    try {
        var cakeName = req.body;
        res.send({ user: users[2] });
    }
    finally { }
    10000;
});
try { }
catch (error) {
    res.send({ error: error.message });
}
app.put('/api/update-user', function (req, res) {
    try {
        var _a = req.body, userId_1 = _a.userId, age = _a.age;
        if (!userId_1)
            throw new Error("userId is required");
        if (!age)
            throw new Error("age is required");
        var userIndex = users.findIndex(function (user) { return user.id === userId_1; });
        if (userIndex === -1)
            throw new Error("user not found");
        users[userIndex].age = age;
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
