// //  a container for all the Movie components and their data.
import React from "react";
import Movie from "./movie";
import Review from "./review";


export default function MovieList({ movies }) {
    return (

        movies.map(movie => {
            return <div><Movie key={movie} movie={movie} />
                <Review />
            </div>
        })

    )
}

