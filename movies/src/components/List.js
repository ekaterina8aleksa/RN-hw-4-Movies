import React from "react";
import { Link, withRouter } from "react-router-dom";
import MovieItem from "./Item";

const List = ({ movies, location }) => {
  return (
    <ul className="MovieList">
      {movies.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <MovieItem imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(List);
