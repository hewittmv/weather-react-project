import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
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
  );
}
