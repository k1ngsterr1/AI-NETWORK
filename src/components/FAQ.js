import React from "react";
import "../styles/faq_styles/faq.css";
import JohnTheRobot from "../images/JohnTheRobot.png";
import JohnTheRobotShadow from "../images/JohnTheRobotShadow.png";
import HoverThing from "../images/hover-thing.png";
import HoverThingLight from "../images/hover-thing-light.png";
import MessageWindow from "../images/message-window.png";

const FAQ = () => {
  return (
    <div className="fourth-screen">
      <div className="full-robot-container">
        <h4 className="robot-moderator">Our Moderator:</h4>
        <img className="Johnny" src={JohnTheRobot} alt="Here is Johnny"></img>
        <img
          className="JohnnyShadow"
          src={JohnTheRobotShadow}
          alt="Shadow"
        ></img>
        <img className="HoverThing" src={HoverThing} alt="hover-thing"></img>
        <img
          className="HoverThingLight"
          src={HoverThingLight}
          alt="Light"
        ></img>
        <figure className="robot-name">John The Robot</figure>
      </div>
      {/* M-window-container */}

      <div className="message-window"></div>

      {/* M-window-container */}
      <div className="FAQ-table"></div>
    </div>
  );
};

export default FAQ;
