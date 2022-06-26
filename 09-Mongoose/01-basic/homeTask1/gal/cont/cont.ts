import cat from "../model/model";

let allCats=[]

export async function addCat(req,res) {
    try {
        const {name,age} = req.body;
        if(!name || !age) throw new Error ("Data is missing");
        const newCat = new cat ({name,age});
        const newCatDB = await newCat.save();
        res.send({ok:true, cat:newCatDB});
    } catch (error) {
        res.send({ error: error.message });
      }
}

export async function getAllCats(req,res){
    try{
      allCats=await cat.find({})
      console.debug(allCats)
      res.send({allCats})    
    } catch (error) {
        res.send({ error: error.message })
    }
  }