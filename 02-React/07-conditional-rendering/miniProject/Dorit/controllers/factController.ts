import Fact from "../model/factModel";

export async function getAllFacts(req, res) {
    try {
        const facts = await Fact.find({})
        res.send({ok:true, facts})
    } catch (error) {
        console.log(error.error)
        res.send({error: error.message})
    }
}

export async function addNewFact(req, res) {
    try {
        const newFact = new Fact({
            src:"https://assets3.thrillist.com/v1/image/2498980/1584x1026/scale;webp=auto;jpeg_quality=60.jp",
            text:"fourth fact about me:dogpsychologist", 
            isTrue:"no"
        })

        newFact.save()

        res.send({ok:true,newFact})
    } catch (error) {
        console.log(error.error)
        res.send({error: error.message})
    }
}