import React, { useEffect } from 'react';
import { MoviesService } from '../services/MoviesService';
import { useSelector, useDispatch } from 'react-redux';
import { moviesList, insertPlaylist } from '../actions/MoviesActions';
import { Link } from 'react-router-dom';

export const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { movies } = moviesStore;
  const id = props?.match?.params?.id;



  useEffect(() => {
    if (!movies[id])
      MoviesService.getMovieById(id)
        .then((res) => dispatch(moviesList(id, res?.data)))
        .catch((err) => console.error(err));
  }, []);



  return (
    !movies[id]
      ? <></>
      : <>
        <div className="header">
          <Link to="/">Inicio </Link>
          &nbsp;&nbsp;
          <Link to="/playlist">Meus Favoritos </Link>
        </div>
        <div className='box-details'>
          <br />
          <h1 className="title">{movies[id].title}</h1>
          <p className="details"> {movies[id].overview} </p>
          <p className="site"><a href={movies[id].homepage}>{movies[id].homepage}</a></p>
          <br />
          <button className="btn favoritar" onClick={() => dispatch(insertPlaylist(movies[id]))}>
            <strong>Favoritar</strong>
          </button>
          <br />
          <br />
        </div>
      </>
  );
}