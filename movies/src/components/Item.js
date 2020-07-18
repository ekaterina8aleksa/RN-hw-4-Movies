import React from "react";
import PropTypes from "prop-types";
import { errorImage, bigImgPath } from "../services/urlImg";

const MovieItem = ({ poster_path, original_title }) => (
  <div className="movieItem">
    <div>
      <img
        src={poster_path ? `${bigImgPath}${poster_path}` : `${errorImage}`}
        className="movieItemImage"
        alt={original_title}
      />
    </div>
    <div className="movieItemTitle">
      <h3>{original_title}</h3>
    </div>
  </div>
);

MovieItem.defaultProps = {
  poster_path: errorImage,
};

MovieItem.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
};
export default MovieItem;
