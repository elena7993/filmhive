const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMyYjQxZTU1ZDhiODIxNTUwMDAzMjhmYTI3OTQ0MiIsIm5iZiI6MTczMDM0NzcyNy4yNDY5NTg1LCJzdWIiOiI2NzIxYjQ2MzgyNmZlNTc5OWNjNGE3NzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rGFNjkd9wK9wY5cf-_PWk43pAjEE_Vz3c0mTRLTL3x4",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const searchMovie = (keyword) => {
  const searchUrl =
    baseUrl + `search/movie?query=${keyword}&include_adult=true&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

export const movieCredits = (id) =>
  fetch(url(`movie/${id}/credits`), options).then((res) => res.json());

export const personImages = (personId) =>
  fetch(
    url(`${baseUrl}person/${personId}/images?language=ko-kr`),
    options
  ).then((res) => res.json());

export const movieTrailer = (id) =>
  fetch(url(`movie/${id}/videos`), options).then((res) => res.json());
