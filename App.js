import React, { useState, useRef, useEffect }from 'react';
import MovieList from './movie-list';
// import uuid from '../node_modules/uuid'

const localStorageKey = 'movieApp.movies';

function App() {
  const [movies, setMovies] = useState([]);
  const movieNameRef = useRef();

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedMovies) setMovies(storedMovies)
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(movies))
  }, [movies]);

  function handleAddMovie(e) {
    const name = movieNameRef.current.value
    if (name === '') return 
    setMovies(prevMovies => {
      return[...prevMovies, {id: 1, name: name}]
    })
    console.log(name);
    movieNameRef.current.value = null
  }

  return (
    <>
    <MovieList movies={movies} />
    <input ref={movieNameRef} type='text' placeholder='Input Item'/>
    <button onClick={handleAddMovie}>Add Movie </button>
    <button> Clear Movie</button>
    <div>You can do it</div>
    </>
  );
}

export default App;
