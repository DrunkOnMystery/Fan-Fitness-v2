const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Game Schema file
    const gameSchema = new Schema({

      teamname: {
        type: String, required: true
      },
      gamedate: {
        type: Date, required: true
      },
      runs: {
        type: Number, required: true
      },
      homeruns: {
        type: Number, required: true
      },
      strikeouts: {
        type: Number, required: true
      },
      OppStrikeouts: {
        type: Number, required: true
      },
      OppRuns: {
        type: Number, required: true
      }

    });
  
    const GameData = mongoose.model("GameData", gameSchema)
    module.exports= GameData;