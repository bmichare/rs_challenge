/**
 * @file Middleware for Weather API
 * @method get grabs weather data for a specified city
 */

const fetch = require("node-fetch");

const rootUrl = "https://api.weatherapi.com/v1/";
const { WEATHER_API_KEY } = process.env;

const weatherController = {};

// Grabs weather data for a specified city
weatherController.get = async (req, res, next) => {
  // Build resource URL
  const resource = "current.json?";
  const params = `q=${req.query.city}&aqi=no`;
  const url = rootUrl.concat(resource, params);

  try {
    const response = await fetch(url.concat(resource), {
      headers: {
        key: WEATHER_API_KEY,
      },
    });
    const weatherData = await response.json();

    res.locals.weather = weatherData;
    next();
  } catch (err) {
    next({
      log: `teamsController.get: ERROR: ${typeof err === "object" ? JSON.stringify(err) : err}`,
      message: { err: "Error grabbing teams. Check server logs for details" },
    });
  }
};

module.exports = weatherController;
