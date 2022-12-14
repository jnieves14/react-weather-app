import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div
        className="row"
        // TODO: Add stylization into its own CSS file
        style={{
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <div className="col-2"></div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <WeatherTemperature fahrenheit={props.data.temperature} />
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <WeatherIcon
                code={props.data.icon}
                // TODO: Add stylization into its own CSS file
                size={52}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
