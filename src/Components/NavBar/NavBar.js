import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import YoutubeLogo from "../../Images/youtubeLogo.gif";

const NavBar = (props) => {
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

      {props.isLoggedIn ? (
        <Button variant="dark" id="logout" onClick={() => props.loggedOut()}>
          Log Out
        </Button>
      ) : (
        <>
          <Link to="/signin" id="signin">
            {" "}
            Sign In{" "}
          </Link>

          <Link to="/signup" id="signup">
            Sign Up
          </Link>
        </>
      )}
    </header>
  );
};

export default NavBar;
