const { Schema, model } = require("mongoose")

const IndexSchema = new Schema({
    name: {
        type: String,
        require: [true, "Must include name"]
    },
    hobbie: { type: String }
})

module.exports = model("Index", IndexSchema)