import React from 'react';
import Review from './review';

export default function Movie({ movie }) {
    return (
        <div>
            {movie.name}
            <Review />
        </div>
    )
}



