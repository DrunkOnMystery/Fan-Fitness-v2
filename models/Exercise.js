const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Exercise Schema
const exerciseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  defaultCount: {type: Number, required: true }
});
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;