import React from "react";
import "./Weather.css";

export default function Condition() {
  return (
    <div className="weather-data">
      <div className="row">
        <div className="col-8">
          <h1>{weatherData.city}</h1>
          <p className="current-date-time"> 29th Sept 23 17:15 </p>
          <p className="weather-description">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="broken clouds"
            />
            <span className="temperature">{weatherData.temperature} </span>
            <span className="unit">°C </span>
          </p>
          <p className="description">{weatherData.description}</p>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Feels Like:</strong> {weatherData.temperature}
            </li>
            <li>
              <strong>Humidity</strong> {weatherData.humidity}
            </li>
            <li>
              <strong>Wind:</strong> {weatherData.wind}hm/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
