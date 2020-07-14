import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => (
  <ul className="">
    <li className="linkNavigation ">
      <NavLink
        to={routes.home}
        exact
        activeClassName="active"
        className="linkBtn"
      >
        Home
      </NavLink>
    </li>
    <li className="linkNavigation ">
      <NavLink to={routes.movies} activeClassName="active" className="linkBtn">
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
