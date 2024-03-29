import { string } from 'joi';
import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true
    },
    doctorType: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const DoctorModel = mongoose.model('doctors', DoctorSchema);

export default DoctorModel;
