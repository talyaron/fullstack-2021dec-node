import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";


export async function getAppo(req, res) {

    try {

        const { date, kind } = req.body;

        console.log(date)

        console.log(kind)

        const apposResult = await AppoModel.find({ date: date, kind: kind }).exec();

        res.send(apposResult)

    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export async function createAppo(req, res) {

    try {
        const { date, time, kind, doctorId } = req.body;

        console.log(date, time, kind, doctorId)

        const newAppo = new AppoModel({ date, time, kind, doctorId });

        const newAppoDB = await newAppo.save();

        res.send({ success: true, appo: newAppoDB });


    } catch (error) {
        res.send({ error: error.message });
    }


}
