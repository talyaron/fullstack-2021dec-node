// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    }
})

const Task = model("Task", TaskSchema)
export default Task;