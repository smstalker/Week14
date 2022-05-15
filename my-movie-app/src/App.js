import React, { useState, useRef, useEffect } from 'react';
import MovieList from './movie-list';



import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'movieApp.movies';

function App() {
  const [movies, setMovies] = useState([]);
  const movieNameRef = useRef();
  // store data locally
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedMovies) setMovies(storedMovies)
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(movies))
  }, [movies]);
  // add movie to list
  function handleAddMovie() {
    const name = movieNameRef.current.value
    if (name === '') return
    setMovies(prevMovies => {
      return [...prevMovies, { id: uuidv4(), name: name }]
    })
    // console.log(name);
    movieNameRef.current.value = null
  }

  return (
    <>
      <MovieList movies={movies} />
      <input ref={movieNameRef} type='text' placeholder='Input Movie' />
      <button onClick={handleAddMovie}>Add Movie </button>


    </>
  );
}

export default App;
