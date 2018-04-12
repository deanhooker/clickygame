import React from "react";
import './Navbar.css';

const Navbar = props =>
    <nav className="navbar fixed-top navbar-light">
        <h2 className="title">Clicky Game</h2>
        <h2 className="title">South Park Edition</h2>
        <h2 id="score">Score: <span>{props.score}</span> | Top score: <span>{props.hiScore}</span></h2>
    </nav>
    ;

export default Navbar;