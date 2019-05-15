import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Nav = () => {
  return (
    <nav className="site-nav">
      <ul className="container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/highscores">High Score</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
