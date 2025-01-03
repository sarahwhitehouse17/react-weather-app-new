import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "3deb07c475cdt015b4f399a253e4o0b8";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code={"clear-sky-day"} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">20°</span>
            <span className="WeatherForecast-temp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
