/**
 * @file api Router
 * routes to nba & weather
 */

const express = require("express");
const nbaRouter = require("./nba");
const weatherRouter = require("./weather");

const apiRouter = express.Router();

apiRouter.use("/nba", nbaRouter);
apiRouter.use("/weather", weatherRouter);

// Answer API requests.
apiRouter.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

module.exports = apiRouter;
