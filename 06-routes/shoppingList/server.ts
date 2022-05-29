import express from 'express';
const app = express();
const port: number = 3000;

app.use(express.static('public'));
app.use(express.json());

import usersRoute from '../shoppingList/routes/usersRoute';
// import usersRoute,{x} from "./routes/usersRoute";
app.use("/users", usersRoute);



app.listen(port, () => {
	return console.log(`Server is listening at http://localhost:${port}`);
});
