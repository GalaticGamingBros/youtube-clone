import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <header className="nav">
            <strong id='youtube'>Youtube</strong>

            <strong id="home">
                <Link to="/Home">Home</Link>
            </strong>

            <strong id="about">
                <Link to="/about">About</Link>
            </strong>
        </header>
    );
};

export default NavBar;