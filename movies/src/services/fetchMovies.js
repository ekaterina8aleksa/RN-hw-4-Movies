import axios from "axios";

const root = "https://api.themoviedb.org/3/";
const key = "d1c54d9ef388629bdcc2a11b2c88483f";

export const fetchTrendsMovies = () => {
  return axios
    .get(`${root}trending/movie/day?api_key=${key}`)
    .then((response) => response.data.results);
};
export const fetchSearch = (query) => {
  return axios
    .get(
      `${root}search/movie?api_key=${key}&language=en-US&query=${query}&page=1include_adult=false`
    )
    .then((response) => response.data.results);
};
export const fetchMovies = (movieId) => {
  return axios
    .get(`${root}movie/${movieId}?api_key=${key}&language=en-US`)
    .then((response) => response.data);
};
export const fetchCast = (movieId) => {
  return axios
    .get(`${root}movie/${movieId}/credits?api_key=${key}`)
    .then((response) => response.data.cast);
};
export const fetchReviews = (movieId) => {
  return axios
    .get(`${root}movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
    .then((response) => response.data.results);
};
