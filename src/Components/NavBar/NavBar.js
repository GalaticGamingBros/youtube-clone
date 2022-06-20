import React from "react";
import { Link } from "react-router-dom";

import YoutubeLogo from "../../Images/youtubeLogo.gif";

const NavBar = () => {
  return (
    <header className="nav" id="youtube">
      <img
        className="Youtube-logo"
        src={YoutubeLogo}
        width="150"
        height="100"
        alt="wait until the page loads"
      />
      <Link to="/" id="home">
        Home
      </Link>

      <Link to="/about" id="about">
        About
      </Link>
    </header>
  );
};

export default NavBar;
