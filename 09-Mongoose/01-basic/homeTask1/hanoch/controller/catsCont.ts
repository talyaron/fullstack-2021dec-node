import catsModel from "../model/catsModel";

export async function addCat(req, res){
    try {
        const {image, name, age, color} = req.body;
         const cats = new catsModel({image, name, age, color})
        if(!cats){
            throw new Error ('missing argument!!')
        }

           cats.save()
       const allCats = await catsModel.find({})
       res.send({allCats})
       
    } catch (error) {
        res.send({error:error.message})
    }
}

 export async function getCats(req, res){
    try {
        const cats = await catsModel.find({})
        res.send({cats})
    } catch (error) {
        res.send({error:error.message})
    }
}

export async function searchCat(req, res){
    try {
        const {age} = req.query;
        console.log(age);
        const searchCats = await catsModel.find({age});
        if(!searchCats){
            throw new Error ('missing argument!!')
            
        }else{
            console.log({searchCats});
            res.send({searchCats})}
           
            
        
    } catch (error) {
        res.send({error:error.message})
    }
} 