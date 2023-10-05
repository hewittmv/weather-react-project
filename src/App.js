import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="initials">
          <a
            className="text-gradient "
            href="https://github.com/hewittmv/weather-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            VHM
          </a>
        </div>
      </header>

      <div className="city-weather">
        <Weather defaultCity="Birmingham" />
      </div>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="github-link"
          href="https://github.com/hewittmv/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Weather App | Open Source Code{" "}
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
