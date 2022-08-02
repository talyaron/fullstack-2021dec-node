import mongoose from "mongoose";
import AppoModel from "../Models/AppoModel";


export async function getAppo(req, res) {

    try {

        const { date, doctorType } = req.body;

        console.log(date)

        console.log(doctorType)

        const apposResult = await AppoModel.find({ date: date, doctorType: doctorType }).exec();

        res.send(apposResult)

    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export async function createAppo(req, res) {

    try {
        const { date, time, doctorType, doctorId } = req.body;

        console.log(date, time, doctorType, doctorId)

        const newAppo = new AppoModel({ date, time, doctorType, doctorId });

        const newAppoDB = await newAppo.save();

        res.send({ success: true, appo: newAppoDB });


    } catch (error) {
        res.send({ error: error.message });
    }


}
