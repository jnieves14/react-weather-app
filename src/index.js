import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather Search Engine</h1>
    <App />

    <a
      href="https://github.com/jnieves14/react-weather-app"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </StrictMode>
);
