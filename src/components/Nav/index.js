import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/"
      >
        New Prompt
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/randomprompts"
      >
        Random prompts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
