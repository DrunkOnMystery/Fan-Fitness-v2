import axios from "axios";

export default {
    // Gets all games for a date
    getGames: function() {
      return axios.get("/api/games");
    },
    // Gets the games with the given id
    getGame: function(id) {
      return axios.get("/api/games" + id);
    },
    // Deletes the games with the given id
    deleteGames: function(id) {
      return axios.delete("/api/games" + id);
    },
    // Saves a games to the database
    saveGames: function(gameData) {
      return axios.post("/api/games", gameData);
    },

    getExercises: function() {
      return axios.get("/api/exercise");
    },
    // Gets the book with the given id
    getExercise: function(id) {
      return axios.get("/api/exercise" + id);
    },
    // Deletes the book with the given id
    deleteExercise: function(id) {
      return axios.delete("/api/exercise" + id);
    },
    // Saves a book to the database
    saveExercise: function(exerciseData) {
      return axios.post("/api/exercise", exerciseData);
    }
  };