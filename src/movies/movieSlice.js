import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FAVORITES_KEY, loadFavoritesFromLocalStorage } from '../utils';

// Fetch movies from the API
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL);
  return response.data;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: loadFavoritesFromLocalStorage(),
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.id === movie.id);
      state.favorites = isFavorite
        ? state.favorites.filter((fav) => fav.id !== movie.id)
        : [...state.favorites, movie];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = movieSlice.actions;

export default movieSlice.reducer;
