import React, { Component } from "react";
import * as fetchMovies from "../services/fetchMovies";
import Movie from "../components/Movie";
import routes from "../routes";
class MovieDetails extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    fetchMovies.fetchMovies(id).then((movie) => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        {movie && (
          <Movie
            poster_path={movie.poster_path}
            movie={movie}
            goBack={this.handleGoBack}
          />
        )}
      </>
    );
  }
}

export default MovieDetails;
