var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var cakes = [
    { name: "HoneyCake",
        ingredients: ["honey 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"] },
    { name: "vanillaCake",
        ingredients: ["vanilla 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"] },
];
//route
app.put("/api/get-cake", function (req, res) {
    try {
        var cakeName_1 = req.body.cakeName;
        if (!cakeName_1)
            throw new Error("cakeName is required");
        var cakeIndex = cakes.findIndex(function (cake) { return cake.name === cakeName_1; });
        if (cakeIndex === -1)
            throw new Error("cakeName not found");
        res.send({ cake: cakes[cakeIndex] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
