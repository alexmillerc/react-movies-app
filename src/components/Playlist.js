import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePlaylist } from '../actions/MoviesActions';
import { Link } from 'react-router-dom';

const Playlist = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { playlist } = moviesStore;

  return (
    <>
    <div className="header">
        <Link to="/">Inicio </Link>
        &nbsp;&nbsp;
        <Link to="/playlist">Favoritos </Link>
    </div>
    <div className="playlist">
        <br />
        <h1>Meus Favoritos</h1>
        {playlist.map((movie, index) => (
        <div key={index} >
            <div> 
                <h5 > 
                <Link key={index} to={`/movie/${movie?.id}`}>
                {movie?.title}
                </Link> &nbsp;
                <button className="btn remover" onClick={() => dispatch(removePlaylist(index))}>
                    <strong>X</strong>
                    </button>
                </h5>  
            </div>
        </div>
        ))}
        <br />
    </div>
    </>
  );
};
export default Playlist;