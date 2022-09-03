import { Schema, model } from "mongoose";

const FactSchema = new Schema({
    src:String,
    text: String,
    isTrue: String
})

const Fact = model("fact", FactSchema)
export default Fact