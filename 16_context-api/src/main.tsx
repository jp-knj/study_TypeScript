import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RGBContextProvider, ThemeProvider } from "./context";
import "./main.scss";
ReactDOM.render(
  <React.StrictMode>
    <RGBContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RGBContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
