import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesService } from '../services/MoviesService';

export const MoviesList = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => setMovies(res))
  }, []);

  return (
    <div className="App">
      <h1>Filmes Populares</h1>
      <ul className="movies">
        {movies?.data?.results?.map((movie, index) => (
          <Link key={index} to={`/movie/${movie?.id}`}>
            <h5>{movie?.title}</h5>
          </Link>
        ))}
      </ul>
    </div>
  );
}