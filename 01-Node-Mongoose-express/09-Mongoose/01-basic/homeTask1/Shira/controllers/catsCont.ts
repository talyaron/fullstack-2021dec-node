import CatModel from "../model/catsModel";

export async function addCat(req,res) {
    try {
        const {name,age,color,image} = req.body;
        if(!name || !age ) throw new Error("missing one or more details")

        const newCat = new CatModel({ name, age, color, image });
        const newCatToDB = await newCat.save();

        res.send({ success: true, cat: newCatToDB})
        
    }
     catch (error) {
    res.send({ error: error.message }); 
    }
    
}