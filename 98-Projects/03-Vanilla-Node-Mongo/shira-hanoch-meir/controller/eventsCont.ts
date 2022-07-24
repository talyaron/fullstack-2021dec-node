import {lessonsModel, cartModel} from '../model/model';

export async function addEvents(req, res){
    try {
        
        const {lesson, date, price}
        const events = lessonsModel.find({});
        res.send(events)
    } catch (error) {
        res.send({error: error.message})
    }
}
export async function eventList(req, res){
    try {
        const events = lessonsModel.find({});
        res.send(events)
    } catch (error) {
        res.send({error: error.message})
    }
}