const express = require("express");
const Router = express.Router();

const exerciseController = require("../../controllers/exerciseController");
//route for making a new exercise
Router.route("/")
.post(exerciseController.create)
.get(exerciseController.findAll);

Router.route("/:id")
.delete(exerciseController.remove)
.get(exerciseController.findById)

module.exports = Router