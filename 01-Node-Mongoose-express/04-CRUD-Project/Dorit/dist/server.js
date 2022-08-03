"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
var port = process.env.PORT || 6060;
var rout_1 = __importDefault(require("./Routes/rout"));
app.use(express_1["default"].json()); // to get body from client (body = data from client)
app.use(express_1["default"].static("public"));
//  let recipes: Array<Recipe> = [
//     { name: "HoneyCake", 
//     ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//      adderName:"Dorit Guy"},
//      { name: "vanillaCake", 
//      ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//       prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//       adderName:"Gadi Guy"}
//   ]; 
//route
app.use("/api/get-recipe", rout_1["default"]);
app.use('/api/add-recipe', rout_1["default"]);
app.use('/api/check-recipe', rout_1["default"]);
app.use('/api/update-ing', rout_1["default"]);
app.use('/api/update-pre', rout_1["default"]);
app.use('/api/get-all-recipes', rout_1["default"]);
app.listen(port, function () {
    return console.log("Server is listening at http://localhost:" + port);
});
