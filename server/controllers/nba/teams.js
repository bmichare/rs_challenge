const fetch = require("node-fetch");

const teamsController = {};

// API call to get list of NBA teams
teamsController.get = (req, res, next) => {
  fetch("https://www.balldontlie.io/api/v1/teams")
    .then((response) => response.json())
    .then((data) => {
      res.locals.teams = data;
      next();
    })
    .catch((err) => ({
      log: `teamsController.get: ERROR: ${typeof err === "object" ? JSON.stringify(err) : err}`,
      message: { err: "Error grabbing teams. Check server logs for details" },
    }));
};

module.exports = teamsController;
