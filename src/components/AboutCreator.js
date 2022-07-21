import React from "react";
import "../styles/aboutC_styles/aboutC.css";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const AboutCreator = () => {
  return (
    <div className="third-screen">
      <h2 className="about-c-header">ABOUT CREATOR</h2>
      <figure className="separator-cr"></figure>
      <div className="about-c-glass">
        <p className="about-c-p">
          This project was fully created by{" "}
          <span className="ruslan">ruslan makhmatov</span> - software developer
          from kazakhstan
        </p>
        <div className="social-networks">
          <FaGithub className="icon-sn-1"></FaGithub>
          <FaDiscord className="icon-sn-2"></FaDiscord>
          <FaBehance className="icon-sn-3"></FaBehance>
        </div>
        <figure className="separator-cr-2"></figure>
        <button className="contact-me-btn">CONTACT ME</button>
      </div>
    </div>
  );
};

export default AboutCreator;
