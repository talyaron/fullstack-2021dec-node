import CatModel from "../model/catsModel";
let allCats=[]


export async function getAllCats(req,res){
  try{
    allCats=await CatModel.find({})
    console.debug(allCats)
    res.send({allCats})    
  } catch (error) {
      res.send({ error: error.message })
  }
}

export async function addCat(req, res) {
  try {
    const { name, age, color, src } = req.body;
    if (!name || !age || !color || !src) throw new Error("server:not enough data");
    console.debug(name, age, color, src)
    let newCat = new CatModel({name:name,age:age,color:color,src:src})
    console.debug(newCat)
    let newCatDB = await newCat.save();
    console.debug(newCat)

    res.send({ success: true, cat: newCatDB });
    console.debug(newCat)
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function filterCatsByAge(req:any, res:any) {
  try {
    const {age} = req.query
    if(!age) throw new Error('Age is missing');

    const cats = await CatModel.find({age});


    res.send({cats})
  } catch (error) {
    res.send({ error: error.message });
  }
}
