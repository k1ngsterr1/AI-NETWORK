import React from "react";

const NavBar = () => {
  return (
    <nav className="navigation">
      <a className="home">HOME</a>
      <a className="about-project">ABOUT PROJECT</a>
      <a className="about-creator">ABOUT CREATOR</a>
      <a className="faq">FAQ</a>
      <a className="support">SUPPORT</a>
      <a className="user">
        <ion-icon name="person-circle-outline"></ion-icon>Ruslan Makhmatov
      </a>
    </nav>
  );
};

export default NavBar;
