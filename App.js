import React, { useState }from 'react';
import MovieList from './movie-list';


function App() {
  const [movies, setMovies] = useState(['Toy Story', 'A Bugs Life'])
  return (
    <>
    <MovieList movies={movies} />
    <input type='text' placeholder='Input Item'/>
    <button>Add Movie </button>
    <button> Clear Movie</button>
    <div>You can do it</div>
    </>
  );
}

export default App;
