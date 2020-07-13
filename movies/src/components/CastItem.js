import React from "react";
import PropTypes from "prop-types";

const CastItem = ({ item, profile_path }) => (
  <div>
    <img
      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
      alt={item.name}
    />
    <p>{item.name}</p>
    <p> {item.character}</p>
  </div>
);
CastItem.propTypes = {
  profile_path: PropTypes.string.isRequired,
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CastItem;
