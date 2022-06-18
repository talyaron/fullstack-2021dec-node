import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

 import indexRoute from "./routes/indexRoutes"
 app.use("/index", indexRoute);

import MTARoutes from "./routes/MTARoutes";
app.use("/MTA", MTARoutes);

 import HTARoute from "./routes/HTARoutes"
 app.use("/HTA", HTARoute);







app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });
  