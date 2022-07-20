import React from "react";
import "../styles/about_styles/about-styles.css";

const AboutUs = () => {
  return (
    <div className="second-screen">
      <h2 className="about-project-header">About Project</h2>
      <figure className="separator"></figure>
      <div className="glass-div">
        <p className="about-us-paragraph">
          This Project Was Created In Order To Show the basics of the neural
          networks and machine learning, through the chatting way. To put it
          more simply, you can create{" "}
          <span className="blue-txt">your own AI</span> and train it just with
          chatting
        </p>
      </div>
      <button className="read-more">READ MORE</button>
    </div>
  );
};

export default AboutUs;
