export const FAVORITES_KEY = 'favoriteMovies';

export const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};
