import CatModel from "../model/catsModel";
let allCats= new CatModel
export async function getAllCats(req,res){
  try {
    const db ="myDatabase";
    const coll = "cats";
    allCats = await db.coll.find()
    res.send({allcats})    
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
    //save to db new cat
    //newCat = new CatModel({ name:"Banban", age:7 ,color:"white", src:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGN1dGUlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" });

    //newCatDB = await newCat.save();

    //res.send({ success: true, cat: newCatDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}
