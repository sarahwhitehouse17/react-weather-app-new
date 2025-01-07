import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.daily[0].temperature.maximum);
        return`${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.daily[0].temperature.minimum)
        return(`${temperature}`);
    }

    function day() {
        let date = new Date(props.data.daily[0].time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        return days[day];
    }

  console.log(props);
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.daily[0].condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temp-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
