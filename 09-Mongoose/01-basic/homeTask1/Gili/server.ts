import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

mongoose
	.connect('mongodb+srv://Gili-Admin:rdsdyne6RdSdYnE6@cluster0.7mbcr.mongodb.net/myDB?retryWrites=true&w=majority')
	.then(() => {
		console.log(`connected to DB`);
	})
	.catch((err) => console.log(err));


    import CatsRoute from './routes/catsRoute';
    app.use('/cats', CatsRoute);


// const mitzi = new CatModel({name:'mitzi', age:2});
// mitzi.save();

// CatModel.find({age:2}).then(docs=>console.log(docs)).catch(err=>console.log(err))