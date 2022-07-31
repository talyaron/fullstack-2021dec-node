import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const DoctorModel = mongoose.model('doctors', DoctorSchema);

export default DoctorModel;
