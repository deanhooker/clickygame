import React from "react";
import './Navbar.css';

const Navbar = () =>
    <nav className="navbar fixed-top navbar-light">
        <h2 id="title">Clicky Game</h2>
        <h2 id="guess">You guessed <span>correctly!</span></h2>
        <h2 id="score">Score: <span>0</span> | Top score: <span>10</span></h2>
    </nav>
    ;

export default Navbar;