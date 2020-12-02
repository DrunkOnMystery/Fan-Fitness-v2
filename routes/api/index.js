const router = require("express").Router();
const exerciseRoutes = require("./exerciseApi");
// const gamesRoutes = require("./gamesApi");
// routes

router.use("/exercise", exerciseRoutes);


// router.use("/games", gamesRoutes);


module.exports = router;