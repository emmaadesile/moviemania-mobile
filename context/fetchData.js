import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '0edf560d45bf9b88baced0cac6b95b03';

async function fetchMovies() {
  const moviesEndpoint = `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

  const movies = await axios(moviesEndpoint);
  return storeData(movies.data.results);
}

async function fetchTvShows() {
  const tvShowsEndpoint = `${baseURL}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

  const tvShows = await axios(tvShowsEndpoint);
  return storeData(tvShows.data.results);
}

// function fetchMovieDetails() {
//   const endpoint = `${baseURL}/${videoType}/${videoId}?api_key=${apiKey}&append_to_response=credits`;
// }

function fetchTvShowDetails() {}

function storeData(data) {
  data.map(
    ({
      title,
      vote_count,
      id,
      genre_ids,
      poster_path,
      original_name,
      vote_average,
      first_air_date,
      release_date,
      overview
    }) => {
      return {
        title,
        vote_count,
        id,
        genre_ids,
        poster_path,
        original_name,
        vote_average,
        first_air_date,
        release_date,
        overview
      };
    }
  );
}

export { fetchMovies, fetchTvShows, fetchTvShowDetails };
