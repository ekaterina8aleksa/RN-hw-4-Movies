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
        <h1>Hot for Today</h1>
        <TrendsList items={movies} />
      </>
    );
  }
}
export default HomePage;
