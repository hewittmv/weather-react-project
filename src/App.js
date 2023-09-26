import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="github-link text-gradient"
          href="https://github.com/hewittmv/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          VHM
        </a>
      </header>
      <div className="container">
        <div className="city-weather">
          <form className="search-form">
            <input
              type="search"
              placeholder="Enter a City"
              className="search-input"
              autoFocus
            />
            <input
              type="submit"
              value="Search"
              className="search-button btn btn-primary"
            />
          </form>
          <button className="my-location">📍</button>
          <div className="weather-data">
            <div className="weather-data-column-1">
              <h1>New York</h1>
              <p className="current-date-time">29th Sept 2023 21:00 </p>
              <p className="weather-description">🌤️ 18°C Sunny </p>
            </div>
            <div className="weather-data-column-2">
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
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-gradient">Weather App |</p>
        <a
          className="github-link text-gradient"
          href="https://github.com/hewittmv/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by VHM
        </a>
      </footer>
    </div>
  );
}

export default App;
