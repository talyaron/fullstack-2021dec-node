import mongoose from 'mongoose';
import Joi from 'joi';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    image: {
        type: String
    }
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    email: Joi
        .string()
        .email()
        .required(),
    password: Joi
        .string()
        .required()
})

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
