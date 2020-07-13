import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ReviewsList from "./ReviewsList";
import CastList from "./CastList";

const Movie = ({ movie, poster_path }) => (
  <>
    <div>
      <h2>{movie.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={movie.original_title}
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
    </div>
    <div>
      <p>Additional Information</p>
      <Link to={`/movies/${movie.id}/cast`}>Cast</Link> <br />
      <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
    </div>
    <div>
      <Route path="/movies/:movieId/cast" component={CastList} />
      <Route path="/movies/:movieId/reviews" component={ReviewsList} />
    </div>
  </>
);
Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  movie: PropTypes.objectOf(
    PropTypes.shape({
      original_title: PropTypes.string,
      original_name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default withRouter(Movie);
