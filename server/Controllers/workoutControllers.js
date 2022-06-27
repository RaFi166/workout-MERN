const express = require("express");
const app = express();
var mongoose = require("mongoose");
const Workout = require("../models/workoutmodel");

//post workout
const workout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const work = await Workout.create({ title, reps, load });
    res.send(work);
  } catch (error) {
    res.send({ error: error.message });
  }
};

//get all workout
const getworkouts = async (req, res) => {
  try {
    const result = await Workout.find({});
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

//get one workout
const singleworkout = async (req, res) => {
  try {
    const id = req.params.id;
    const singledata = await Workout.findOne({ _id: id });
    res.send(singledata);
  } catch (error) {
    res.send(error.message);
  }
};

//delete one workout
const deleteworkout = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Workout.deleteOne({ _id: id });
    res.send("deleted");
  } catch (error) {
    res.send({ err: error.message });
  }
};

//update
const updatework = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Workout.findOneAndUpdate({ _id: id }, ...req.body);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  workout,
  getworkouts,
  singleworkout,
  deleteworkout,
  updatework,
};
