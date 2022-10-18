const express = require("express");

// NBA controllers
const teamsController = require("../../controllers/nba/teams");

const nbaRouter = express.Router();

nbaRouter.get("/teams", teamsController.get, (req, res) => {
  res.set("Content-Type", "application/json");
  res.json(res.locals.teams);
});
module.exports = nbaRouter;
