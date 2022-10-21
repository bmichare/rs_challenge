/**
 * @file Middleware for balldontlie API
 * @method get grabs list of all active NBA teams
 */

const fetch = require("node-fetch");
const apiCache = require("./apiCache")

const url = "https://www.balldontlie.io/api/v1/";
const nbaController = {};

// Grabs list of all active NBA teams
nbaController.get = async (req, res, next) => {
  try {
    const resource = "teams";
    let teamsData = apiCache.get("teams");

    if (!teamsData) {
      const response = await fetch(url.concat(resource));
      teamsData = await response.json();
      apiCache.set("teams", teamsData);
    }

    res.locals.teams = teamsData;
    next();
  } catch (err) {
    next({
      log: `ERROR: teamsController.get: ${err}`,
      message: { err: "Error grabbing teams. Check server logs for details" },
    });
  }
}

module.exports = nbaController;
