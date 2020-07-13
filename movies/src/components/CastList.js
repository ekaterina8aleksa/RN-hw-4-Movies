import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";
import CastItem from "./CastItem";
import PropTypes from "prop-types";

class CastList extends Component {
  state = {
    items: null,
  };
  componentDidMount() {
    const { id } = this.props.match.params.movieId;
    fetchMovies.fetchCast(id).then((items) => this.setState({ items }));
  }
  render() {
    const { items } = this.state;
    return (
      <ul className="">
        {items.length > 0 &&
          items.map(({ item }) => (
            <li key={item.cast_id} className="">
              <CastItem profile_path={item.profile_path} item={item} />
            </li>
          ))}
      </ul>
    );
  }
}
CastList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default CastList;
