import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <header className="nav">
            <strong id="youtube"> <img src={"https://cdn.dribbble.com/users/1923171/screenshots/5676763/media/fca46b74ba4f89fbb1569f860cb44916.gif"} width="200" height="200" alt="wait until the page loads" /> 
            </strong>
            <strong id="home">
                <Link to="/home">Home</Link>
            </strong>

            <strong id="about">
                <Link to="/about">About</Link>
            </strong>
        </header>
    );
};

export default NavBar;