console.log("Connected and ready!");

import express from "express";
const app = express();
const port = process.env.PORT || 4007;
app.use(express.static("public"));
app.use(express.json());

import recordsRoute from './routes/recordsRoutes'  
app.use("/albums", recordsRoute);

app.listen(port, () => {
  return console.log(`Express is listening at: ${port}`);
});

