import "./styles/main_styles/main-styles.css";
import React from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  );
};

export default App;
