import { Model } from 'mongoose';
import CatModel from '../model/catsModel';
let catDB = [];

export async function addCat(req, res) {
	try {
		const { catName, age, imgUrl } = req.body;
		if (!catName || !age) throw new Error('missing name or age');
		const newCat = new CatModel({ catName, age, imgUrl });
		const newCatDB = await newCat.save();
		res.send({ success: true, cat: newCatDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getAllCats(req, res) {
	try {
		catDB = await CatModel.find({});
		console.debug(catDB);
		res.send({ catDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}
