import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import LoginButton from "./LoginButton";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <LoginButton />
    </nav>
  );
}

export default Navigation;
