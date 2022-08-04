import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";

export async function getAppo(req, res) {

    try {

        const { date, doctorType } = req.body;

        console.log(date)

        console.log(doctorType)

        const apposResult = await AppoModel.find({ date: date, doctorType: doctorType, userId:'empty' }).exec();
         
        res.send(apposResult)

    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export async function createAppo(req, res) {

    try {
        const { date, time, doctorType, doctorId } = req.body;

        const userId: string = 'empty'

        console.log(date, time, doctorType, doctorId)

        const newAppo = new AppoModel({ date, time, doctorType, doctorId, userId });

        const newAppoDB = await newAppo.save();
        

        res.send({ success: true, appo: newAppoDB });


    } catch (error) {
        res.send({ error: error.message });
    }


}

export async function pairAppoToUser(req, res) {

    try {
        const { userId, appoId } = req.body;

        console.log(userId, appoId)


        const filter = { _id: appoId };
        const update = { userId: userId };


        let doc = await AppoModel.findOneAndUpdate(filter, update, { new: true })

        console.log(doc);

        res.send(doc)

    } catch (error) {

        res.send({ error: error.message });
    }



}

