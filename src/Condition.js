import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Conversion from "./Conversion";

export default function Condition(props) {
  return (
    <div className="Condition">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />

          <p className="weather-description">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="main-temp">
              {" "}
              <Conversion celsius={props.data.temperature} />{" "}
            </span>
          </p>
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-6">
          <ul>
            <li className="mt-2">
              <strong>Feels Like:</strong>{" "}
              <Conversion celsius={props.data.temperature} />
            </li>
            <li>
              <strong>Humidity:</strong> {Math.round(props.data.humidity)} %
            </li>
            <li>
              <strong>Wind:</strong> {Math.round(props.data.wind)}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
