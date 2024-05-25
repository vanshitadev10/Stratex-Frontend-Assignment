import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const sortedMovies = movies.slice().sort((a, b) => b.rating - a.rating);

  return (
    <div className="movie-list">
      {sortedMovies.length > 0 && sortedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
