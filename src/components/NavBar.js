import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navigation">
      <a className="home">HOME</a>
      <a className="about-project">ABOUT PROJECT</a>
      <a className="about-creator">ABOUT CREATOR</a>
      <a className="faq">FAQ</a>
      <a className="support">SUPPORT</a>
      <div className="user-container">
        <a className="user">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
          Ruslan Makhmatov
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
