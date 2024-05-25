import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchMovies } from './movies/movieSlice';
import MovieList from './Components/MovieList';
import Favorite from './Components/Favorite';
import './index.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default App;
