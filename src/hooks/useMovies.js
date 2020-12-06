import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';


export const useMovies = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => setMovies(res))
  }, []);

  return (
    movies
  );
}

