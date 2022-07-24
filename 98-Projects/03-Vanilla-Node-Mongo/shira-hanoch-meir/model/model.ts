import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true}
});
const coachSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true}
});
const lessonsSchema = new mongoose.Schema({
    lesson: String,
    date: Date,
    price: Number,
    coach: String
});
const cartSchema = new mongoose.Schema({
    lesson: String,
    date: Date,
    price: Number,
    customer: String
});
export const regModel = mongoose.model('users', regSchema);
export const coachModel = mongoose.model('coachers', coachSchema);
export const cartModel = mongoose.model('cart', cartSchema);
export const lessonsModel = mongoose.model('lessons', lessonsSchema)