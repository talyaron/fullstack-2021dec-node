import seaAnimalModel from "../model/animalModel"

export async function addSeaAnimal(req, res) {
  try {
    const { name, donation, color } = req.body;
    console.log(name)

    if (!name || !donation || !color )throw new Error ("Missing details!");

    //save to db 
    const newSeaAnimal = new seaAnimalModel({name, donation, color});
    const newSeaAnimalDB = await newSeaAnimal.save();

    res.send({ success: true, seaAnimal: newSeaAnimalDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}

