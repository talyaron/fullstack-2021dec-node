import mongoose from "mongoose";

const CoursesShema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String
});

//create a collection
const Course = mongoose.model("courses", CoursesShema);
export default Course;