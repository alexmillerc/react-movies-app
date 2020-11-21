import React, { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export const MovieDetails = (props) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    MoviesService.getMovieById(props?.match?.params?.id)
      .then((res) => setMovie(res?.data))
  }, []);



  return (
    <div className='box-details'>
      <h1 className="title-details">{movie?.title}</h1>
      <p className="details"> {movie?.overview} </p>
      <p className="site"><a href={movie?.homepage}>{movie?.homepage}</a></p>
    </div>
  );
}