import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ReviewsList from "./ReviewsList";
import CastList from "./CastList";
import errorImage from "../services/errorImage";

const Movie = ({ movie, poster_path, goBack }) => (
  <>
    <button type="button" className="goBackBtn" onClick={goBack}>
      Go Back
    </button>
    <div>
      <h2 className="movieFilmTitle">{movie.original_title}</h2>
      <img
        className="bigImg"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${errorImage}`
        }
        alt={movie.original_title}
      />
      <h3 className="moviePageTitle ">Overview</h3>
      <p className="overview">{movie.overview}</p>
    </div>
    <div>
      <p className="moviePageTitle ">Additional Information</p>
      <ul>
        <li className="linkNavigation">
          <NavLink
            to={`/movies/${movie.id}/cast`}
            activeClassName="active"
            className="linkBtn"
          >
            Cast
          </NavLink>
        </li>
        <li className="linkNavigation">
          <NavLink
            to={`/movies/${movie.id}/reviews`}
            activeClassName="active"
            className="linkBtn"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
    <div>
      <Route path="/movies/:movieId/cast" component={CastList} />
      <Route path="/movies/:movieId/reviews" component={ReviewsList} />
    </div>
  </>
);

Movie.defaultProps = {
  poster_path: errorImage,
  overview: "sorry =( no overview",
};
Movie.propTypes = {
  goBack: PropTypes.func.isRequired,
  poster_path: PropTypes.string,
  movie: PropTypes.objectOf(
    PropTypes.shape({
      // adult: PropTypes.oneOfType([PropTypes.object, PropTypes.boolean]),
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
    })
  ).isRequired,
};
export default withRouter(Movie);
