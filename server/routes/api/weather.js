const express = require("express");

// NBA controllers
const weatherController = require("../../controllers/weather");

const weatherRouter = express.Router();

weatherRouter.get("/", weatherController.get, (req, res) => {
  res.set("Content-Type", "application/json");
  res.json(res.locals.weather);
});
module.exports = weatherRouter;
