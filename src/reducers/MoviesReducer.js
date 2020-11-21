import { actions as moviesActions } from '../actions/MoviesActions';

const stateInitial = {
  movies: {},
  playlist: [],
};

const MoviesReducer = (state = stateInitial, action) => {
  let  movies, playlist;
  switch (action.type) {
    case moviesActions.moviesList:
      movies = { ...state.movies };
      movies[action.id] = action.movies;
      return {
        ...state,
        movies,
      };

    case moviesActions.playlistInsert:
      playlist = [...new Set([...state.playlist, action.movie])];
      return {
        ...state,
        playlist,
      };

    case moviesActions.playlistRemove:
      playlist = state.playlist.filter((_, i) => i !== action.id);
      return {
        ...state,
        playlist,
      };

    default: return state;
  }
};

export default MoviesReducer;