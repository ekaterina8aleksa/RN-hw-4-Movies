import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";
import CastItem from "./CastItem";
import PropTypes from "prop-types";

class CastList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    fetchMovies.fetchCast(id).then((items) => this.setState({ items }));
  }

  render() {
    const { items } = this.state;

    return (
      <ul className="castList">
        {items.length > 0 &&
          items.map(({ name, profile_path, cast_id, character }) => (
            <li key={cast_id}>
              <CastItem
                profile_path={profile_path}
                name={name}
                character={character}
                cast_id={cast_id}
              />
            </li>
          ))}
      </ul>
    );
  }
}

CastList.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      cast_id: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
        .isRequired,
    })
  ),
};
export default CastList;
