import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
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
      <h1>Results for New York</h1>
      <div className="row weather-data-spacing">
        <div className="col-6 weather-left-col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="weather-icon"
          />
          <span className="temperature">4 </span>
          <span className="unit">°C | °F</span>
          <ul>
            <li>Precipiation: 100%</li>
            <li>Humidity: 89%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <br />
          <ul>
            <li className="weather-heading">Weather</li>
            <li>Monday 03:00</li>
            <li>Rain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
