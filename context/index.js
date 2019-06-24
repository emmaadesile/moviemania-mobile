import React from 'react';
import axios from 'axios';
import { Animated, Dimensions } from 'react-native';
import {
  fetchMovies,
  fetchTvShows,
  fetchMovieDetails,
  fetchTvShowDetails
} from './fetchData';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '0edf560d45bf9b88baced0cac6b95b03';

const AppContext = React.createContext();
const Consumer = AppContext.Consumer;

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class Provider extends React.Component {
  fetchMovies = fetchMovies();
  fetchTvShows = fetchTvShows();

  state = {
    isMenuOpen: false,
    opacity: new Animated.Value(1),
    top: new Animated.Value(screenHeight),
    left: new Animated.Value(screenWidth),
    scale: new Animated.Value(1),
    movies: [],
    tvShows: []
  };

  componentDidMount() {
    const movies = this.fetchMovies;
    const tvShows = this.fetchTvShows;

    console.log(movies);

    this.setState({ movies });
    this.setState({ tvShows });
  }

  fetchMovies = () => {
    const moviesEndpoint = `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

    let movies;
    axios.get(moviesEndpoint, {}).then(data => console.log(data.result));
    // return movies.data.results;
  };

  openMenu = () => {
    this.setState(
      prevState => ({
        ...prevState,
        isMenuOpen: true
      }),
      () => {
        if (this.state.isMenuOpen) {
          new Animated.spring(this.state.left, { toValue: 60 }).start();
          new Animated.spring(this.state.opacity, { toValue: 0.95 }).start();
        }
      }
    );
  };

  closeMenu = () => {
    this.setState(
      prevState => ({
        ...prevState,
        isMenuOpen: false
      }),
      () => {
        if (!this.state.isMenuOpen) {
          new Animated.spring(this.state.left, {
            toValue: screenWidth
          }).start();
          new Animated.spring(this.state.opacity, { toValue: 1 }).start();
        }
      }
    );
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          isMenuOpen: this.state.isMenuOpen,
          top: this.state.top,
          left: this.state.left,
          opacity: this.state.opacity,
          movies: this.state.movies,
          tvShows: this.state.tvShows,
          actions: {
            openMenu: this.openMenu,
            closeMenu: this.closeMenu,
            animateOpacity: this.animateOpacity
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { Consumer, Provider };
