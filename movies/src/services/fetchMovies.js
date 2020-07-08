import axios from "axios";

const root = "https://api.themoviedb.org/3/";
const key = "d1c54d9ef388629bdcc2a11b2c88483f";

export const fetchTrendsMovies = () => {
  return axios
    .get(`${root}/trending/movie/day&api_key=${key}`)
    .then((response) => response.data.results);
};
export const fetchSearch = (query) => {
  return axios
    .get(`${root}/movie/&query=${query}&api_key=${key}&page=1`)
    .then((response) => response.data.results);
};
export const fetchMovies = (movieId) => {
  return axios
    .get(`${root}/movie/${movieId}&api_key=${key}`)
    .then((response) => response.data);
};
export const fetchCredits = (movieId) => {
  return axios
    .get(`${root}/movie/${movieId}/credits&api_key=${key}`)
    .then((response) => response.data.results);
};
