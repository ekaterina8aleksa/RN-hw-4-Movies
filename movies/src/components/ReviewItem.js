import React from "react";
import PropTypes from "prop-types";

const ReviewItem = ({ author, content }) => (
  <>
    <h4 className="reviewAuthor">Author: {author}</h4>
    <p className="reviewContent"> {content}</p>
  </>
);
ReviewItem.propTypes = {
  author: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  content: PropTypes.string.isRequired,
};
export default ReviewItem;
