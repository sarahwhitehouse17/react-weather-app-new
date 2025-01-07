import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props);
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.daily[0].time}</div>
      <WeatherIcon code={props.data.daily[0].condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">
          {props.data.daily[0].temperature.maximum}°
        </span>
        <span className="WeatherForecast-temp-min">
          {props.data.daily[0].temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
