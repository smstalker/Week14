// //  a container for all the Movie components and their data.
import React from "react";
import Movie from "./movie";




export default function MovieList({ movies }) {
    return (
        
            movies.map(movie => {
                return <Movie key={movie} movie={movie} />
            })
        
    )
}