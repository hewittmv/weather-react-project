import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="city-weather">
        <div className="container">
          <form className="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a City"
                  className="search-input"
                  autoFocus
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="search-button btn btn-primary"
                />
              </div>
              <div className="col-1">
                <button className="my-location">📍</button>
              </div>
            </div>
          </form>
        </div>
        <div className="weather-data">
          <div className="row">
            <div className="col-6">
              <h1>New York</h1>
              <p className="current-date-time">29th Sept 2023 21:00 </p>
              <p className="weather-description">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="broken clouds"
                />
                <span className="temperature">18 </span>
                <span className="unit">°C </span>
              </p>
              <p className="description">Broken Clouds</p>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <strong>Min:</strong> 18°C
                </li>
                <li>
                  <strong>Max:</strong> 22°C
                </li>
                <li>
                  <strong>Wind:</strong> 5hm/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast-data">
          <div className="forecast-day">
            <div>Mon </div> <div>🌤️</div> <div>18°C</div>
          </div>
          <div className="forecast-day">
            <div>Tue </div> <div>🌤️</div> <div>20°C</div>
          </div>
          <div className="forecast-day">
            <div>Wed </div> <div>☁️</div> <div>17°C</div>
          </div>
          <div className="forecast-day">
            <div>Thu </div> <div>🌧️</div> <div>16°C</div>
          </div>
          <div className="forecast-day">
            <div>Fri </div> <div>⛈️</div> <div>14°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
