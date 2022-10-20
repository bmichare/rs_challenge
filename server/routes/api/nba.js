const express = require("express");

// NBA controllers
const nbaController = require("../../controllers/nba");

const nbaRouter = express.Router();

nbaRouter.get("/", nbaController.get, (req, res) => {
  // console.log("nba teams requested");
  res.set("Content-Type", "application/json");
  res.json(res.locals.teams);
});
module.exports = nbaRouter;
