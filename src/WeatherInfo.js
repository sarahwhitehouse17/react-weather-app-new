import React from "react";
import { FormattedDate } from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  if (!props.data || !props.data.temperature) {
    return <div>Loading...</div>; // Show loading state if data is not available
  }
  return (
    <div className="WeatherInfo">
      <h1>Results for {props.data.city}</h1>
      <div className="row weather-data-spacing">
        <div className="col-6 weather-left-col">
          <div>
            <WeatherIcon code={props.data.icon} size={65} />
          </div>
          <WeatherTemperature celsius={props.data.temperature.current} />

          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <br />
          <ul>
            <li className="weather-heading">Weather</li>
            <FormattedDate date={props.data.date} />
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
