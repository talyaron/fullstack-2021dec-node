import {lessonsModel, cartModel, coachModel} from '../model/model';

export async function addEvents(req, res){
    try {
        const { lesson, date, price, coach} = req.body;
        awiat lessonsModel.create({lesson, date, price, coach});
        res.send({ok: true})
    } catch (error) {
        res.send({error: error.message})
    }
}
export async function eventList(req, res){
    try {
        const events = awiat lessonsModel.find({});
        res.send(events)
    } catch (error) {
        res.send({error: error.message})
    }
}