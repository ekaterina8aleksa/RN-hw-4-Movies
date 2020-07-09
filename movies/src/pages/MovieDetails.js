import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";

class MovieDetails extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = this.props.params.match.movieId;
    fetchMovies.fetchMovies(id).then((movie) => this.setState({ movie }));
  }
  // render(){
  //     return (

  //     )
  // }
}

export default MovieDetails;
