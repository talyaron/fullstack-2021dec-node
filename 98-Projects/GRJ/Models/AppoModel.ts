import mongoose from 'mongoose';

const AppoSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    doctorId: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    kind: {
        type: String
    }

});

const AppoModel = mongoose.model('appos', AppoSchema);

export default AppoModel;
