import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("");

  function showWeather(response) {
    setReady(true);
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function SearchCity(event) {
    setCity(event.target.value);
  }

  let blankForm = (
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
            <div className="col-8">
              <h1> Loading City... </h1>
              <p className="current-date-time">
                {" "}
                <em>loading date & time...</em>{" "}
              </p>
              <p className="weather-description">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="broken clouds"
                />
                <span className="temperature"></span> ∽
                <span className="unit">°C </span>
              </p>
              <p className="description">
                {" "}
                <em>Loading weather</em>{" "}
              </p>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <strong>Feels Like:</strong> ∽ °C
                </li>
                <li>
                  <strong>Humidity:</strong> ∽%
                </li>
                <li>
                  <strong>Wind:</strong> ∽ hm/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast-data">
          <div className="forecast-day">
            <div>loading </div> <div>🌤️</div> <div>∽°C</div>
          </div>
          <div className="forecast-day">
            <div>loading </div> <div>🌤️</div> <div>~°C</div>
          </div>
          <div className="forecast-day">
            <div>loading </div> <div>☁️</div> <div>∽°C</div>
          </div>
          <div className="forecast-day">
            <div>loading </div> <div>🌧️</div> <div>∽°C</div>
          </div>
          <div className="forecast-day">
            <div>loading</div> <div>⛈️</div> <div>∽°C</div>
          </div>
        </div>
      </div>
    </div>
  );

  if (ready) {
    return (
      <div className="Weather">
        <div className="city-weather">
          <div className="container">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a City"
                    className="search-input"
                    autoFocus
                    onChange={SearchCity}
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
              <div className="col-8">
                <h1>{weatherData.city}</h1>
                <p className="current-date-time"> 29th Sept 23 17:15 </p>
                <p className="weather-description">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                    alt="broken clouds"
                  />
                  <span className="temperature">
                    {weatherData.temperature}{" "}
                  </span>
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
  } else {
    return blankForm;
  }
}
