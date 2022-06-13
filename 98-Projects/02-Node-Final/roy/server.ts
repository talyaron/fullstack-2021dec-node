import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

 import indexRoute from "./routes/indexRoutes"
 app.use("/index", indexRoute);

//import MTARoutes from "./routes/MTARoute";
// app.use("/MTA", MTARoute);

// import HTARoute from "./routes/HTARoute"
// app.use("/HTA", HTARoute);





app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });
  