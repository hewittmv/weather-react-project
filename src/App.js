import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div className="container">
        <div className="city-weather">
          <form className="search-form">
            <input
              type="search"
              placeholder="enter a city"
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <button>📍</button>
          <div>
            <h1>New York</h1>
            <p>29th Sept 21:00 </p>
            <p>🌤️ 18°C Sunny </p>
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
