import React from "react";
import "./Weather.css";

export default function Condition(props) {
  return (
    <div className="weather-data">
      <div className="row">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <p className="current-date-time"> 29th Sept 23 17:15 </p>
          <p className="weather-description">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature">{props.data.temperature} </span>
            <span className="unit">°C </span>
          </p>
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Feels Like:</strong> {props.data.feelsLike}
            </li>
            <li>
              <strong>Humidity</strong> {props.data.humidity}
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind}hm/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
