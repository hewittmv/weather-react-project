import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
import Condition from "./Condition";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function Search() {
    const apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function SearchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
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
                className="search-button btn btn-primary border-info shadow-sm border-top-0 border-right-0"
              />
            </div>
            <div className="col-2">
              <button className="my-location">📍</button>
            </div>
          </div>
        </form>

        <Condition data={weatherData} />

        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
