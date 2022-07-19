import React from "react";
import ReactDOM from "react-dom/client";
// Styles and Fonts
import "./styles/styles.css";
// Fonts
import "./fonts/roboto-condensed/RobotoCondensed-Bold.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-BoldItalic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Italic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Light.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-LightItalic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Regular.ttf";
// Components
import App from "./App";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
