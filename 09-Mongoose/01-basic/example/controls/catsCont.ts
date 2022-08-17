import CatModel from "../model/catsModel";

export async function addCat(req, res) {
  try {
    const { name, age } = req.body;

    if (!name || !age) throw new Error("missing name or age");

    //save to db new cat
    const newCat = new CatModel({ name, age });

    const newCatDB = await newCat.save();

    res.send({ success: true, cat: newCatDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}
