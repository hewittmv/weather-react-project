import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          <Weather defaultCity="Toronto" />
        </div>
      </div>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Weather App |</p>
        <a
          className="github-link"
          href="https://github.com/hewittmv/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code{" "}
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#e5e7eb" }}
            size="xl"
            className="github-icon"
          ></FontAwesomeIcon>
        </a>
      </footer>
    </div>
  );
}

export default App;
