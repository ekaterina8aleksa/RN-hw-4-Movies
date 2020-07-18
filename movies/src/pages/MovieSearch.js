import React, { Component } from "react";
import Search from "../common/Search";
import * as fetchMovies from "../services/fetchMovies";
import "react-toastify/dist/ReactToastify.css";
import SearchList from "../components/List";

class MovieSearch extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  // componentDidMount() {
  //     if (!this.state.searchQuery || this.state.searchQuery === " ") {
  //         // toast.warn(`Oooopsy, wrong request  =( `);
  //         return;
  //     } else {
  //         fetchMovies
  //             .fetchSearch(this.searchQuery)
  //             .then((movies) => this.setState({ movies }));
  //     }
  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;

    if (!searchQuery) {
      return;
    }

    fetchMovies
      .fetchSearch(searchQuery)
      .then((movies) => this.setState({ movies }));
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query.trim(),
      movies: [],
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Search onSubmit={this.onChangeQuery} />
        <SearchList movies={movies} />
      </>
    );
  }
}

export default MovieSearch;
