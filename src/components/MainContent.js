import React from "react";
import ClaudeShannon from "../images/Claude.Shannon.png";
import Brain from "../images/Brain.png";
import "animate.css";

const MainContent = () => {
  return (
    <main className="main">
      {/* MAIN HEADER START */}
      <div className="main-header">
        <div className="square">
          <h1 className="ai">AI</h1>
        </div>
        <h1 className="header-text">
          <span className="A-letter">A</span>RTIFICIAL{" "}
          <span className="I-letter">I</span>NTELLIGENCE
        </h1>
      </div>
      {/* MAIN HEADER END */}
      {/* Offer And Quote Start */}
      <p className="offer-p">
        Artificial Intelligence Is Already Among Us, Do You Want To{" "}
        <span className="blue-text">Try It By Yourself?</span>
      </p>
      <figure className="separator"></figure>
      <div className="quote-container">
        <p className="quote">
          “I visualise a time when we will be to robots what dogs are to humans,
          and I’m rooting for the machines.”
        </p>
        <div className="quote-author-container">
          <img className="Claude-Shannon" src={ClaudeShannon} alt="Shon"></img>
          <p className="quote-author">—Claude Shannon</p>
        </div>
      </div>
      {/* Offer And Quote Start */}
      {/* Buttons */}
      <div className="buttons">
        <button className="start-btn">START</button>
        <button className="demo">SIGN UP</button>
      </div>
      <img className="brain-picture" src={Brain}></img>
    </main>
  );
};

export default MainContent;
