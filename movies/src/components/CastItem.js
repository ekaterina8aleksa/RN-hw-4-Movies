import React from "react";
import PropTypes from "prop-types";
import errorImage from "../services/errorImage";

const CastItem = ({ character, name, profile_path }) => (
  <>
    <img
      className="smallImg"
      src={
        profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : `${errorImage}`
      }
      alt={name}
    />
    <p>{name}</p>
    <p> {character}</p>
  </>
);

CastItem.defaultProps = {
  poster_path: errorImage,
};

CastItem.propTypes = {
  profile_path: PropTypes.string,
  cast_id: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
export default CastItem;
