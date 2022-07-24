import React from "react";
import ReactDOM from "react-dom/client";
// Styles and Fonts
import "./styles/main_styles/main-styles.css";
import "./styles/about_styles/about-styles.css";
// Fonts
import "./fonts/roboto-condensed/RobotoCondensed-Bold.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-BoldItalic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Italic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Light.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-LightItalic.ttf";
import "./fonts/roboto-condensed/RobotoCondensed-Regular.ttf";
// Components
import App from "./App";
import SecondApp from "./SecondApp";
import ThirdApp from "./ThirdApp";
import FourthApp from "./FourthApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SecondApp />
    <ThirdApp></ThirdApp>
    <FourthApp></FourthApp>
  </React.StrictMode>
);
