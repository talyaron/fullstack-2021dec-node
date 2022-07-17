
import mongoose from 'mongoose';
import CatModel from '../model/CatsModel';


let allCats = [];

export async function addCat(req, res) {

    try {
        const { name, color, age, imgUrl } = req.body;

        if (!name || !color || !age || !imgUrl)
            throw new Error("One of the inputs is missing");

        const newCat = new CatModel({ name, age, color, imgUrl });
        const newCatDB = await newCat.save();
        res.send({ success: true, cat: newCatDB });


    } catch (error) {
        res.send({ error: error.message })
    }

}

export async function getAllCats(req, res) {

    try {
        allCats = await CatModel.find({})
        res.send({ allCats });


    } catch (error) {
        res.send({ error: error.message })
    }

}

export async function findCats(req: any, res: any) {
    try {

        const { age } = req.body;
        console.log(age)
        
        const filteredCats = await CatModel.find({ age })
        if (!filteredCats) throw new Error("age is missing");
        res.send( filteredCats )

    } catch (error) {
        res.send({ error: error.message })
    }
}

export async function findCatsExpert(req, res) {

const {name, color, age} = req.body
console.log(name)

const filteredCats = await CatModel.find({name:name, color:color, age:age }).exec()

console.log(filteredCats)
res.send(filteredCats)
}