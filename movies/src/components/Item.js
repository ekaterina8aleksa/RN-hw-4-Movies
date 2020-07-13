import React from "react";
import PropTypes from "prop-types";

const MovieItem = ({ poster_path, original_title }) => (
  <div className="movieItem">
    <div className="">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="movieItemImage"
        alt={original_title}
      />
    </div>
    <div className="movieItemTitel">
      <h3>{original_title}</h3>
    </div>
  </div>
);
MovieItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
};
export default MovieItem;
