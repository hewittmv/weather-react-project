import React from "react";
import "./Weather.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.daily.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.daily.temperature.minimum);
    return `${temperature}°`;
  }
  function weekDay() {
    let date = new Date(props.data.daily.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="forecast-day">
      <div className="week-day"> {weekDay()} </div>{" "}
      <div className="forecast-icon">
        {props.data.daily[0].condition.icon_url}
      </div>{" "}
      <div className="forecast-temperatures">
        <span className="forecast-minTemp">{minTemp()}</span>|
        <span className="forecast-maxTemp">{maxTemp()}</span>
      </div>
    </div>
  );
}
