import React, { Component } from "react";
import Search from "../common/Search";
import * as fetchMovies from "../services/fetchMovies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchList from "../components/List";

class MovieSearch extends Component {
  state = {
    movies: [],
    searchQuery: "",
    isLoading: false,
  };
  componentDidMount() {
    fetchMovies
      .fetchSearch(this.searchQuery)
      .then((movies) => this.setState({ movies }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }
  fetchItems = () => {
    const { searchQuery } = this.state;

    if (!searchQuery || searchQuery === " ") {
      toast.warn(`Oooopsy, wrong query  =( `);
      return;
    } else {
      fetchMovies
        .fetchSearch(searchQuery)
        .then((movies) => this.setState({ movies }));
    }
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <ToastContainer />
        <Search onSubmit={this.onChangeQuery} />
        <SearchList movies={movies} />
      </>
    );
  }
}

export default MovieSearch;
