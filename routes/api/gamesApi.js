const express = require("express");
const Router = express.Router();

const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
Router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

// Matches with "/api/games/:id"
Router.route("/:id")
  .get(gamesController.findById)
  .delete(gamesController.remove);

module.exports = Router;