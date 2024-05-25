import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { loadFavoritesFromLocalStorage } from '../utils';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage = loadFavoritesFromLocalStorage();
    setFavorites(favoritesFromLocalStorage);
  }, []);

  return (
    <div className="favorite-list">
      <h2>Favorite Movies</h2>
      <div className="list">
        {favorites?.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>You don't have any favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
