import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <ul className="\">
    <li className="">
      <NavLink to="/" exact activeClassName="">
        Home
      </NavLink>
    </li>
    <li className="">
      <NavLink to="/movies" activeClassName="">
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Nav;
