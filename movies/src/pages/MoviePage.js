import React, { Component } from "react";
import Search from "../common/Search";
import * as fetchMovies from "../services/fetchMovies";
import "react-toastify/dist/ReactToastify.css";
import SearchList from "../components/List";
import { setSearchQuery, getSearchQuery } from "../services/queryLocalStorage";

class MoviePage extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  componentDidMount() {
    const parsedSearchQuery = getSearchQuery("searchQuery");
    if (parsedSearchQuery) {
      this.setState({ searchQuery: parsedSearchQuery });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      setSearchQuery("searchQuery", this.state.searchQuery);
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
        <SearchList movies={movies} location={this.props.location} />
      </>
    );
  }
}

export default MoviePage;
