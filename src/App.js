import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Add default city and its API data when no search has been made */}
        <WeatherSearch defaultCity="San Diego" />
        <footer>
          This project was coded by Jannah Nieves and is{" "}
          <a
            href="https://github.com/jnieves14/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open souced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
