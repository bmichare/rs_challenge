const express = require("express");

const nbaRouter = require("./nba");

const apiRouter = express.Router();

apiRouter.use("/nba", nbaRouter);

// Answer API requests.
apiRouter.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

module.exports = apiRouter;
