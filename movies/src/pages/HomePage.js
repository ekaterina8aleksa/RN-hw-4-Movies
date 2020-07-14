import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";
import TrendsList from "../components/List";

class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetchMovies.fetchTrendsMovies().then((movies) => this.setState({ movies }));
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        <div className="homeTitle">
          <h1>Hot for Today</h1>
        </div>
        <TrendsList movies={movies} />
      </>
    );
  }
}
export default HomePage;
