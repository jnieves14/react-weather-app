import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";
import "./css/WeatherSearch.css";

function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function handleResponse(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "2a7ac6cd6b91e36c577bee8be0adba8c";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      search();
    } else {
      alert("Please enter a city");
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={handleCityChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (weather.loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default WeatherSearch;
