import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }
  function weekDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="forecast-day">
      <div className="week-day">
        {" "}
        <strong>{weekDay()}</strong>{" "}
      </div>{" "}
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          class="img-fluid"
        />
      </div>{" "}
      <div className="forecast-temperatures">
        <span className="forecast-minTemp">
          <strong>{minTemp()}</strong>
        </span>
        {"/"}
        <span className="forecast-maxTemp">
          <strong>{maxTemp()}</strong>
        </span>
      </div>
    </div>
  );
}
