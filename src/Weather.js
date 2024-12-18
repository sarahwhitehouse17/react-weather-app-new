import React, { useState } from "react";
import "./Weather.css";
import { FormattedDate } from "./FormattedDate";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleApiCall(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="search for a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Results for {props.defaultCity}</h1>
        <div className="row weather-data-spacing">
          <div className="col-6 weather-left-col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="weather-icon"
            />
            <span className="temperature">
              {Math.round(weather.temperature)}{" "}
            </span>
            <span className="unit">°C | °F</span>
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <br />
            <ul>
              <li className="weather-heading">Weather</li>
              <FormattedDate date={weather.date} />
              <li className="text-capitalize">{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3deb07c475cdt015b4f399a253e4o0b8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiCall);

    return "Loading..";
  }
}
