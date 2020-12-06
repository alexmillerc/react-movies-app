import React, { } from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';


export const MoviesList = () => {
  const movies = useMovies();

  return (
    <>
      <div className="header">
        <Link to="/">Inicio </Link>
        &nbsp;&nbsp;
        <Link to="/playlist">Favoritos </Link>
      </div>
      <div className="App">
        <br />
        <h1>Filmes Populares</h1>
        <ul className="movies">
          {movies?.data?.results?.map((movie, index) => (
            <Link key={index} to={`/movie/${movie?.id}`}>
              <h5>{movie?.title}</h5>
            </Link>
          ))}
        </ul>
        <br />
      </div>
    </>
  );
}