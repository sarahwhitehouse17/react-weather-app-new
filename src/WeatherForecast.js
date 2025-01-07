import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

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
            <div className="WeatherForecast-day">{forecast.daily[0].time}</div>
            <WeatherIcon code={forecast.daily[0].condition.icon} size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temp-max">
                {forecast.daily[0].temperature.maximum}°
              </span>
              <span className="WeatherForecast-temp-min">
                {forecast.daily[0].temperature.minimum}°
              </span>
            </div>
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
