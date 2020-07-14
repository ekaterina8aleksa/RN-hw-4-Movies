import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";

class ReviewsList extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    fetchMovies.fetchReviews(id).then((items) => this.setState({ items }));
  }
  render() {
    const { items } = this.state;
    return (
      <>
        <ul className="reviewList">
          {items.length > 0 ? (
            items.map(({ author, content, id }) => (
              <li className="reviewItem" key={id}>
                <ReviewItem author={author} content={content} />
              </li>
            ))
          ) : (
            <p>There are no reviews for this movie yet</p>
          )}
        </ul>
      </>
    );
  }
}
ReviewsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default ReviewsList;
