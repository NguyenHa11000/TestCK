import './App.css';
import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/movies/MovieList'
import MovieListHeading from './components/movies/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1'
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results);
  }

  useEffect(() => {
    getMovieRequest()
    
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row' >
        <MovieList movies={movies} />
      </div>
    </div>
  ); 
};

export default App;
