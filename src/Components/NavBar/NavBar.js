import React from "react";
import { Link } from "react-router-dom";

import YoutubeLogo from "../../Images/youtubeLogo.gif";

const NavBar = () => {
  return (
    <div className="header-container">
      <header className="nav">
        <img
          id="youtube"
          src={YoutubeLogo}
          // width="200"
          // height="200"
          alt="wait until the page loads"
        />
        <strong id="home">
          <Link to="/">Home</Link>
        </strong>
        <strong id="about">
          <Link to="/about">About</Link>
        </strong>
      </header>
    </div>
  );
};

export default NavBar;
