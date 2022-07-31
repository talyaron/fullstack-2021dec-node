import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true},
    role: {
        type: String,
        enum: "User",
        default: "User"
      }
});
const coachSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true},
    role: {
        type: String,
        enum: "admin",
        default: "admin"
      }
});
const lessonsSchema = new mongoose.Schema({
    lesson: String,
    day: String,
    dateStart: Date,
    dateEnd: Date,
    price: Number,
    coach: String
});
const cartSchema = new mongoose.Schema({
    lesson: String,
    day: String,
    dateStart: Date,
    dateEnd: Date,
    price: Number,
    user: String
});
export const regModel = mongoose.model('users', regSchema);
export const coachModel = mongoose.model('coachers', coachSchema);
export const cartModel = mongoose.model('cart', cartSchema);
export const lessonsModel = mongoose.model('lessons', lessonsSchema)