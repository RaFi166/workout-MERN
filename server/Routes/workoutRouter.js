const express = require("express");
const {
  workout,
  getworkouts,
  singleworkout,
  deleteworkout,
  updatework,
} = require("../Controllers/workoutControllers");

const workoutrouter = express.Router();

//workout post
workoutrouter.post("/work", workout);

//workout get
workoutrouter.get("/works", getworkouts);

//singleworkout get
workoutrouter.get("/works/:id", singleworkout);

//single workout delete
workoutrouter.delete("/work/delete/:id", deleteworkout);

//update workout
workoutrouter.patch("/work/update/:id", updatework);

module.exports = workoutrouter;
