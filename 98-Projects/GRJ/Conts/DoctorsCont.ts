import mongoose from "mongoose";
import DoctorModel from "../Models/DoctorModel";
import AppoModel from "../Models/AppoModel";

export async function getAllDoctors(req, res) {

    const allDoctors = await DoctorModel.find()

    res.send(allDoctors)

}

export async function createNewDoctor(req, res) {

    try {
        console.log("creating new dr");

        const { firstName, lastName, doctorId, doctorType } = req.body;
        console.log(firstName, lastName, doctorId, doctorType)

        // const checkIfExist = await DoctorModel.find({doctorId: drId})
        const newDr = new DoctorModel({ firstName, lastName, doctorId, doctorType });

        const newDrDB = await newDr.save()


        res.send({ success: true, doctor: newDrDB });


    } catch (error) {
        res.send({ error: error.message });
    }

}


export async function getDoctorsByType(req, res) {
    const { doctorType } = req.body;
    const allDoctors = await DoctorModel.find({ doctorType: doctorType });
    res.send(allDoctors)

}

export async function createDoctorWorkSchedule(req, res) {
    const { detailsArray, doctor_id } = req.body;
    console.log(doctor_id);
    const doctorId = doctor_id
    const userId: string = 'empty'
    const doctor: any = await DoctorModel.find({ _id: doctorId });

    const doctorType: string = doctor.doctorType;

    console.log(detailsArray[0].date);

    detailsArray.forEach(day => {
        let date = day.date;
        create8to5workDay(userId, doctorId, doctorType, date)
    });

    res.send("The appoitments created successfully")
}

async function create8to5workDay(userId, doctorId, doctorType, date) {
    var eightAM = "08:00";
    var fivePM = "17:00";
    var eightAMtotalInMinutes = (parseInt(eightAM.split(":")[0]) * 60) + parseInt(eightAM.split(":")[1]);
    var fivePMtotalInMinutes = (parseInt(fivePM.split(":")[0]) * 60) + parseInt(fivePM.split(":")[1]);


    for (let timeInMin = eightAMtotalInMinutes; timeInMin < fivePMtotalInMinutes; timeInMin += 15) {

        let minutes: any = (timeInMin % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        let hours = ((timeInMin - minutes) / 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        let output: string = hours + ':' + minutes;
        let time = output;

        const newAppo = new AppoModel({ userId, doctorId, doctorType, date, time });
        const newAppoDB = await newAppo.save();
        console.log(newAppoDB)
    }

}