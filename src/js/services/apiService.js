import axios from 'axios';

const API_KEY = '1aa8151ecc72e8e6dae871e3aeaed3b2';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.movie_id = id;
  }
  getTrendingMovies() {
    const tredingFilms = axios
      .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${this.page}`)
      .then(({ data }) => data);
    return tredingFilms;
  }

  getMovieByQuery() {
    const filmsByQuery = axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
      )
      .then(({ data }) => data);

    return filmsByQuery;
  }
  getMovieById() {
    const genresIds = axios
      .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => data.genres);

    return genresIds;
  }



  getInfoModalCard () {
    const modalDetailInfo = axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => data);

    return modalDetailInfo;
  }




  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
