import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weather App</p>
        <a
          className="github-link"
          href="https://github.com/hewittmv/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by VHM
        </a>
      </header>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weather App</p>
        <a
          className="github-link"
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
