import { useEffect } from 'react';
import { MoviesService } from '../services/MoviesService';
import { useSelector, useDispatch } from 'react-redux';
import { moviesList } from '../actions/MoviesActions';


export const useDetails = (id) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(s => s.movies);

  useEffect(() => {
    if (!movies[id])
      MoviesService.getMovieById(id)
        .then((res) => dispatch(moviesList(id, res?.data)))
        .catch((err) => console.error(err));
  }, [movies, id]);

};

export default useDetails;