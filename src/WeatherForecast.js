import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast.daily[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3deb07c475cdt015b4f399a253e4o0b8";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
