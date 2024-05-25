import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../movies/movieSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
    window.location.href = '/favorites'
  };

  return (
    <div className="movie-card">
      <h3>{movie.movie}</h3>
      <p>Rating: {movie.rating}</p>
      <div>
        <button onClick={() => window.location.href = movie.imdb_url}>View on IMDb</button>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
