import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => (
  <ul className="">
    <li className="">
      <NavLink to={routes.home} exact activeClassName="">
        Home
      </NavLink>
    </li>
    <li className="">
      <NavLink to={routes.movies} activeClassName="">
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
