export const actions = {
    moviesList: 'MoviesList',
    playlistInsert: 'PlaylistInsert',
    playlistRemove: 'PlaylistRemove',
  }; 


export const moviesList = (id, movies) => ({
    type: actions.moviesList,
    id,
    movies,
});

export const insertPlaylist = (movie) => ({
    type: actions.playlistInsert,
    movie,
});

export const removePlaylist = (id) => ({
    type: actions.playlistRemove,
    id,
});