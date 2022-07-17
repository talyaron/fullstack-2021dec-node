"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var IndexSchema = new Schema({
  name: {
    type: String,
    require: [true, "Must include name"]
  },
  hobbie: {
    type: String
  }
});
module.exports = model("Index", IndexSchema);