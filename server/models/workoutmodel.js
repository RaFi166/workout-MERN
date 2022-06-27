var mongoose = require("mongoose");
const { Schema } = mongoose;

const workSchema = new Schema({
  title: {
    require: true,
    type: String,
  },
  reps: {
    require: true,
    type: Number,
  },
  load: {
    type: Number,
    require: true,
  },
});

const Workout = mongoose.model("Workout", workSchema);
module.exports = Workout;
