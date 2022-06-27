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
		res.send({ catDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function filterCatsByAge(req, res) {
	try {
        const { age } = req.body;
        if(!age) throw new Error("age missing");
        const catsDB = await CatModel.find({age});
        res.send({ catsDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}
