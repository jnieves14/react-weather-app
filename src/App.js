import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      Weather App
      <WeatherSearch />
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
  );
}

export default App;
