/**
 * @file Renders weather data when a city (Team) is selected
 * @param selectedCity city of selected Team
 */

import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "./styles/WeatherDisplay.css"

const WeatherDisplay = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!props.selectedCity) setWeatherData(null);
    else {
      // CircularProgress renders when weatherData === false
      setWeatherData(false);

      try {
        fetch(`/api/weather?city=${props.selectedCity}`)
          .then((res) => res.json())
          .then((weatherRes) => setWeatherData(weatherRes))
      } catch (err) {
        setWeatherData(null);
        console.error(err);
      }

    }
  }, [props.selectedCity])

  return (
    // Renders loading icon when weatherData === false (aka is in loading state)
    weatherData === false ? <CircularProgress size="201.51px" /> :
      < div
        variant="outlined"
        className="weatherDisplay"
      >
        <div className="weatherContent">
          <h1 id="locationName">{weatherData ? weatherData.location.name : "Select a city to get weather info"}</h1>

          <h3 id="weatherStatus">{weatherData ? weatherData.current.condition.text : ""} </h3>
          <div className="weatherDetails">
            <div id="weatherInfo">
              <p>Temperature: </p>
              <p>{weatherData ? `${weatherData.current.temp_f}°F ` : "N/A"}</p>
            </div>
            <div id="weatherInfo">
              <p>Wind: </p>
              <p>{weatherData ? `${weatherData.current.wind_mph}mph` : "N/A"}</p>
            </div>
            <div id="weatherInfo">
              <p>Humidity: </p>
              <p>{weatherData ? weatherData.current.humidity : "N/A"}</p>
            </div>

          </div>
        </div>

      </div >
  )
}

export default WeatherDisplay;