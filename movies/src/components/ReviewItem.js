import React from "react";
import PropTypes from "prop-types";

const ReviewItem = ({ item }) => (
  <>
    <h4>Author: {item.author}</h4>
    <p> {item.content}</p>
  </>
);
ReviewItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ReviewItem;
