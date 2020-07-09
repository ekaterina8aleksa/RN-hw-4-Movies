import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MovieItem from "./Item";

const List = ({ movies, location }) => {
  return (
    <ul className="movieList">
      {movies.map(({ id, poster_path, original_title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <MovieItem
              poster_path={poster_path}
              original_title={original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(List);
